import { User } from "./User";

export interface UserRepository {
  create(id_user: number, name: string, last_name: string): Promise<User | null>;
}
