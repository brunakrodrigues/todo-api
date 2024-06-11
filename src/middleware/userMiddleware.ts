import { type users, PrismaClient } from "@prisma/client";
import { Request as Req, Response as Res, NextFunction } from "express";
import { Auth0UserInfo } from "src/types";

const prisma: PrismaClient = new PrismaClient();
let user: users;

export async function userMiddleware(
  req: Req,
  res: Res,
  next: NextFunction
): Promise<void> {
  const authorization = req.headers?.authorization ?? "";

  const response = await fetch(
    "https://todo-0ktbc4ol4s0x7mfe.us.auth0.com/userinfo",
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization,
      },
    }
  );
  const auth0User: Auth0UserInfo = (await response.json()) as Auth0UserInfo;

  if (!user) {
    user = await prisma.users.upsert({
      where: {
        email: auth0User.email,
      },
      update: {},
      create: {
        email: auth0User.email,
        name: auth0User.name,
      },
    });
  }

  res.locals.user = user;
  next();
}
