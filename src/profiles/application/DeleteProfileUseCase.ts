import { Profile } from "../domain/Profile";
import { ProfileRepository } from "../domain/ProfileRepository";

export class DeleteProfileUseCase {
  constructor(readonly profileRepository: ProfileRepository) {}

  async run(id: number): Promise<Profile | null> {
    try {
      const profile = await this.profileRepository.delete(id);
      return profile;
    } catch (error) {
      return null;
    }
  }
}