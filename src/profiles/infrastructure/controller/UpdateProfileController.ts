import { Request, Response } from "express";
import { UpdateProfileUseCase } from "../../application/UpdateProfileUseCase";

export class UpdateProfileController {
  constructor(readonly updateProfileUseCase: UpdateProfileUseCase) {}

  async run(req: Request, res: Response) {
    const data = req.body;
    console.log(data);
    try {
      const profile = await this.updateProfileUseCase.run(data.id, data.id_user, data.name, data.last_name);
      console.log(profile)
      if (profile) {
        res.status(200).json({
          status: "success",
          data: profile,
          message: "Perfil obtenido correctamente",
        });
      } else {
        res.status(404).json({
          status: "error",
          message: "Perfil no encontrado",
        });
      }
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: "Ocurrió un error al obtener el perfil",
        error: error,
      });
    }
  }
}
