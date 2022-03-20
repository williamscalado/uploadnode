import Express from "express";

const app = Express();

app.use(Express.json())





app.listen(3000, ()=>{
console.log('Server running in port 3000')
})