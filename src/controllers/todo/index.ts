import {
  Body,
  Controller,
  Delete,
  Get,
  Params,
  Patch,
  Post,
  Response,
} from "@decorators/express";
import { PrismaClient } from "@prisma/client";
import { Response as Res } from "express";

import { Auth0UserInfo } from "../../types";

@Controller("/todo")
export default class TodoController {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  @Get("/")
  async findAll(@Response() res: Res) {
    const user = res.locals.user;
    const tasks = await this.prisma.tasks.findMany({
      where: {
        userId: user.id,
      },
      orderBy: [{ completed: "asc" }, { createdAt: "desc" }],
    });
    res.send(tasks);
  }

  @Post("/")
  async createTask(@Response() res: Res, @Body("text") text: string) {
    const user = res.locals.user;
    const task = await this.prisma.tasks.create({
      data: {
        text,
        userId: user.id,
      },
    });

    res.send(task);
  }

  @Delete("/:id")
  async deleteTask(@Response() res: Res, @Params("id") id: string) {
    const user = res.locals.user;
    await this.prisma.tasks.delete({
      where: {
        id,
        userId: user.id,
      },
    });

    res.send();
  }

  @Patch("/:id/toggle")
  async toggleTask(@Response() res: Res, @Params("id") id: string) {
    const user = res.locals.user;
    const task = await this.prisma.tasks.findUnique({
      where: {
        id,
        userId: user.id,
      },
    });

    if (!task) {
      return res.status(404).send({ error: `${id} not found in tasks` });
    }

    const updatedTask = await this.prisma.tasks.update({
      where: { id },
      data: {
        completed: !task.completed,
      },
    });

    res.send(updatedTask);
  }
}
