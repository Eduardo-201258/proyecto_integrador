import { Request, Response } from "express";
import { CreateProfileUseCase } from "../../application/CreateProfileUseCase";
//import { Product } from "../../domain/Product";

export class CreateProfileController {
  constructor(readonly createProfileUseCase: CreateProfileUseCase) {}

  async run(req: Request, res: Response) {
    const data = req.body;
    console.log(data);
    try {
      const profile = await this.createProfileUseCase.run(data.id_user, data.name, data.last_name);

      if (profile) {
        res.status(200).send({
          status: "success",
          data: profile,
          message: "Perfil creado exitosamente",
        });
      } else {
        res.status(400).send({
          status: "error",
          message: "No se pudo crear el perfil",
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
