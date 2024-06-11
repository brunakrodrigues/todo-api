declare module "todo-api";

declare namespace Express {
  export interface Request {
    user?: any;
  }
}
