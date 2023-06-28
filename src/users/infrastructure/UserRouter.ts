import express from "express";

import { createUserController } from "./dependencies";

export const usersRouter = express.Router();

usersRouter.post("/", createUserController.run.bind(createUserController));
