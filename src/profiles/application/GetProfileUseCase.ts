import { Profile } from "../domain/Profile";
import { ProfileRepository } from "../domain/ProfileRepository";

export class GetProfileUseCase {
  constructor(readonly profileRepository: ProfileRepository) {}

  async run(id_user: number): Promise<Profile[] | null> {
    try {
      const profiles = await this.profileRepository.getByUser(id_user);
      return profiles;
    } catch (error) {
      return null;
    }
  }
}