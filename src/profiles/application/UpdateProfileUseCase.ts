import { Profile } from "../domain/Profile";
import { ProfileRepository } from "../domain/ProfileRepository";

export class UpdateProfileUseCase {
  constructor(readonly profileRepository: ProfileRepository) {}

  async run(id: number, id_user: number, name: string, last_name: string): Promise<Profile | null> {
    try {
      const profile = await this.profileRepository.update(id, id_user, name, last_name);
      return profile;
    } catch (error) {
      return null;
    }
  }
}