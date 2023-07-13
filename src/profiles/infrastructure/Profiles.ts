import express from "express";

import { createProfileController, deleteProfileController, getProfileController, updateProfileController } from "./dependencies";

export const usersRouter = express.Router();

usersRouter.post("/profiles/addProfile", createProfileController.run.bind(createProfileController));
usersRouter.delete("/profiles/deleteProfile", deleteProfileController.run.bind(deleteProfileController))
usersRouter.get("/profiles/getProfiles", getProfileController.run.bind(getProfileController))
usersRouter.put("/profile/updateProfiles", updateProfileController.run.bind(updateProfileController))