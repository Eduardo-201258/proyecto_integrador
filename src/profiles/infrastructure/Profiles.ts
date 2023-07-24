import express from "express";

import { createProfileController, deleteProfileController, getProfileController, updateProfileController } from "./dependencies";
import { userRolCheck } from "../../helpers/checks/homeworkCheck";

export const usersRouter = express.Router();

usersRouter.post("/profiles/addProfile", userRolCheck, createProfileController.run.bind(createProfileController));
usersRouter.delete("/profiles/deleteProfile", userRolCheck, deleteProfileController.run.bind(deleteProfileController))
usersRouter.get("/profiles/getProfiles", userRolCheck, getProfileController.run.bind(getProfileController))
usersRouter.put("/profile/updateProfiles", userRolCheck, updateProfileController.run.bind(updateProfileController))