import { User } from "../domain/User";
import { UserRepository } from "../domain/UserRepository";

export class CreateUserUseCase {
  constructor(readonly userRepository: UserRepository) {}

  async run(id_user: number, name: string, last_name: string): Promise<User | null> {
    try {
      const user = await this.userRepository.create(id_user, name, last_name);
      return user;
    } catch (error) {
      return null;
    }
  }
}