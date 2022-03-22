import { Router } from "express";
import { routesUser } from "./user/indes";

const routesGlobal = Router();


routesGlobal.use(routesUser)


export { routesGlobal };
