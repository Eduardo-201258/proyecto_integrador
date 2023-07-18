import { Profile } from "../domain/Profile";
import { ProfileRepository } from "../domain/ProfileRepository";

export class DeleteProfileUseCase {
    constructor(readonly profileRepository: ProfileRepository) {}
  
    async run(id: number): Promise<Profile| null> {
      try {
        const user = await this.profileRepository.delete(id);
        return user;
      } catch (error) {
        throw new Error("Ocurrió un error al eliminar el perfil");
      }
    }
  }