import { Request, Response } from "express";
import { DeleteProfileUseCase } from "../../application/DeleteProfileUseCase";

export class DeleteProfileController {
  constructor(readonly createProfileUseCase: DeleteProfileUseCase) {}

  async run(req: Request, res: Response) {
    const data = req.body;
    console.log(data);
    try {
      const profile = await this.createProfileUseCase.run(data.id);

      if (profile) {
        res.status(200).send({
          status: "success",
          data: profile,
          message: "Perfil eliminado exitosamente",
        });

      } else {
        res.status(400).send({
          status: "error",
          message: "No se encontro el perfil",
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
