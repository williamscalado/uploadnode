import { Request, Response, Router } from "express";

const routesUser = Router();


routesUser.get('/user',(req: Request, res: Response)=>{
    res.send('ok')
})


export { routesUser };
