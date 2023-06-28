import { User } from "../domain/User";
import { UserRepository } from "../domain/UserRepository";
import { pool } from "../../database/psql"

export class UserRepository_impl implements UserRepository {

  async create(name: string, last_name: string): Promise<User | null> {
    try {
      const query = "INSERT INTO users ( name, last_name) VALUES ($1, $2)";
      await pool.query(query, [name, last_name]);
    
    } catch (error) {
      console.log(error)
    }
    return null;
  }
}