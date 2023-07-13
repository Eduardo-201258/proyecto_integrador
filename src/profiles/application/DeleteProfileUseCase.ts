import { ProfileRepository } from "../domain/ProfileRepository";

export class DeleteProfileUseCase {
    constructor(readonly profileRepository: ProfileRepository) {}
  
    async run(id: number): Promise<void> {
      try {
        const status = await this.profileRepository.delete(id);
        return status;
      } catch (error) {
        throw new Error("Ocurrió un error al eliminar el perfil");
      }
    }
  }