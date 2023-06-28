import { pool } from "../../database/psql";
import { User } from "../domain/User";
import { UserRepository } from "../domain/UserRepository";

export class UserRepository_impl implements UserRepository {
  async create(name: string, last_name: string): Promise<User | null> {
    const query = "INSERT INTO users ( name, last_name) VALUES ($1, $2)";
    await pool.query(query, [name, last_name]);
    console.log(pool);

    return null;
  }
}
