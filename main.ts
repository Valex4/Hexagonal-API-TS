import * as express from "express";
import { userRouter } from "./src/User/Infrastructure/UserRouter";

const app = express();

app.use(express.json());

app.use('/users', userRouter) 

app.listen(3000, ()=> {
    console.log("Corriendo el servicio en el puerto 3000")
})
