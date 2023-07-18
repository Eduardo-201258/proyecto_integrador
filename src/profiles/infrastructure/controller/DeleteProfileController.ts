import { Request, Response } from "express";
import { DeleteProfileUseCase } from "../../application/DeleteProfileUseCase";

export class DeleteProfileController {
  constructor(readonly createProfileUseCase: DeleteProfileUseCase) {}

  async run(req: Request, res: Response) {
    const data = req.body;
    console.log(data);
    try {
      const profile = await this.createProfileUseCase.run(data.id);


      console.log(profile)
      if (profile) {
        res.status(200).json({
          status: "success",
          message: "Perfil obtenido correctamente",
        });
      } else {
        res.status(404).json({
          status: "error",
          message: "Perfil no encontrado",
        });
      }
        

    } catch (error) {
      res.status(404).send({
        status: "error",
        data: "Ocurrio un error",
        msn: error,
      });
    }
  }
}
