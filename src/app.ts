import cors from "cors";
import bodyParser from "body-parser";
import express, { Express } from "express";
import { attachControllers } from "@decorators/express";

import { checkJwt } from "./config/auth";
import TodoController from "./controllers/todo";
import { userMiddleware } from "./middleware/userMiddleware";

const app: Express = express();
app.use(cors());
app.use(bodyParser.json());
app.use(checkJwt);
app.use(userMiddleware);
attachControllers(app, [TodoController]);

export default app;
