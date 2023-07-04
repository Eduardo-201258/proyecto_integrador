import { Request, Response } from "express";

import { CreateUserUseCase } from "../../application/CreateUserUseCase";
//import { Product } from "../../domain/Product";

export class CreateUserController {
  constructor(readonly createUserUseCase: CreateUserUseCase) {}

  async run(req: Request, res: Response) {
    const data = req.body;
    console.log(data);
    try {
      const user = await this.createUserUseCase.run(data.id_user, data.name, data.last_name);

      if (user)
        //Code HTTP : 201 -> Creado
        res.status(200).send({
          status: "success",
          data: {
            id: user?.id,
            name: user?.name,
            last_name: user?.last_name,
          },
        });
      else
        res.status(204).send({
          status: "error",
          data: "NO fue posible agregar el registro",
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
