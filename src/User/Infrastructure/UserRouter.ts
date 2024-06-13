import * as express from "express"

import { createUsercontroller } from "./Dependencies"
import { getAllUserController } from "./Dependencies"

export const userRouter = express.Router()

userRouter.get("/", getAllUserController.run.bind(getAllUserController))

userRouter.post("/", createUsercontroller.run.bind(createUsercontroller))