import { StudyPlan } from "../domain/StudyPlan";
import { StudyPlanRepository } from "../domain/StudyPlanRepository";
import { pool } from "../../database/psql"

export class StudyPlanRepository_impl implements StudyPlanRepository {

  async create(id_user: number, id_plan: number): Promise<StudyPlan | null> {
    try {
      const query = "INSERT INTO studyPlan (id_user, id_plan) VALUES ($1, $2)";
      await pool.query(query, [ id_user, id_plan]);

    } catch (error) {
      console.log(error)
    }
    return null;
  }
}