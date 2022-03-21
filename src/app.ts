import Express, { NextFunction, Request, Response } from "express";
import { routes } from "@routes/.";

const app = Express();
app.use(Express.json());

app.use(routes)

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error)
      response.status(500).json({
        error: "Api Sever Error",
        message: error.message,
      });
  }
);

app.use((request: Request, response: Response) => {
  response.status(404).json({
    statusCode: 404,
    error: "Page not found!",
  });
});

export { app };
