import { StudyPlan } from "../domain/StudyPlan";
import { StudyPlanRepository } from "../domain/StudyPlanRepository";

export class CreatePlanUseCase {
  constructor(readonly userRepository: StudyPlanRepository) {}

  async run(id_user: number, id_plan: number): Promise<StudyPlan | null> {
    try {
      const studyPlan = await this.userRepository.create(id_user, id_plan);
      return studyPlan;
    } catch (error) {
      return null;
    }
  }
}