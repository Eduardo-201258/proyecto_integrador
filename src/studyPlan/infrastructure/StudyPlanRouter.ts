import express from "express";

import { createStudyPlanController } from "./dependencies";

export const studyPlanRoute = express.Router();

studyPlanRoute.post("/", createStudyPlanController.run.bind(createStudyPlanController));
