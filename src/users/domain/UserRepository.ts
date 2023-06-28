import { User } from "./User";

export interface UserRepository {
  create(name: string, last_name: string): Promise<User | null>;
}
