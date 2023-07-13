import { Profile } from "../domain/Profile";
import { ProfileRepository } from "../domain/ProfileRepository";

export class CreateProfileUseCase {
  constructor(readonly profileRepository: ProfileRepository) {}

  async run(id_user: number, name: string, last_name: string): Promise<Profile | null> {
    try {
      const user = await this.profileRepository.create(id_user, name, last_name);
      return user;
    } catch (error) {
      return null;
    }
  }
}