import { Request, Response } from "express";
import { DeleteProfileUseCase } from "../../application/DeleteProfileUseCase";

export class DeleteProfileController {
  constructor(readonly createProfileUseCase: DeleteProfileUseCase) {}

  async run(req: Request, res: Response) {
    const data = req.body;
    console.log(data);
    try {
      const profile = await this.createProfileUseCase.run(data.id);

        res.status(200).send({
          status: "success"+profile,
          message: "Perfil eliminado exitosamente",
        });

    } catch (error) {
      res.status(404).send({
        status: "error",
        data: "Ocurrio un error",
        msn: error,
      });
    }
  }
}
