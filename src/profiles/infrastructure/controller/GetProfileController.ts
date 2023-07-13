import { Request, Response } from "express";
import { GetProfileUseCase } from "../../application/GetProfileUseCase";

export class GetProfileController {
  constructor(readonly getProfileUseCase: GetProfileUseCase) {}

  async run(req: Request, res: Response) {
    const data = req.body;
    console.log(data);
    try {
      const profile = await this.getProfileUseCase.run(data.id_user);
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
