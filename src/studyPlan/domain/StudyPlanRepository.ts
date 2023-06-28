import { StudyPlan } from "./StudyPlan";

export interface StudyPlanRepository {
  create(id_user: number, id_plan: number): Promise<StudyPlan | null>;
}