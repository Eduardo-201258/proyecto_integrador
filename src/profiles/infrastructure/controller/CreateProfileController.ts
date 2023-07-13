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
        // Si la creación del perfil es exitosa y se obtiene un usuario válido, devolver una respuesta exitosa
        res.status(200).send({
          status: "success",
          data: profile,
          message: "Perfil creado exitosamente",
        });
      } else {
        // Si la creación del perfil no tiene éxito y se obtiene un valor nulo, devolver una respuesta de error
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
