import express from "express";

import { createProfileController, deleteProfileController, getProfileController, updateProfileController } from "./dependencies";
import { userRolCheck } from "../../helpers/checks/homeworkCheck";

export const usersRouter = express.Router();

usersRouter.post("/profiles/addProfile", userRolCheck, createProfileController.run.bind(createProfileController));
usersRouter.delete("/profiles/deleteProfile", userRolCheck, deleteProfileController.run.bind(deleteProfileController))
usersRouter.post("/profiles/getProfiles", userRolCheck, getProfileController.run.bind(getProfileController))
usersRouter.put("/profiles/updateProfiles", userRolCheck, updateProfileController.run.bind(updateProfileController))