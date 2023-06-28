import { CreatePlanUseCase } from "../application/CreatePlanUseCase";
import { CreateStudyPlanController } from "./controller/CreateStudyPlanController";
import { StudyPlanRepository_impl } from "./StudyPlanRepository_impl";

const createStudyPlanRepository = new StudyPlanRepository_impl();

export const createStudyPlan = new CreatePlanUseCase(createStudyPlanRepository);

export const createStudyPlanController = new CreateStudyPlanController(createStudyPlan);