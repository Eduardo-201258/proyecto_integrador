import { Request, Response } from "express";

import { CreatePlanUseCase } from "../../application/CreatePlanUseCase";
//import { Product } from "../../domain/Product";

export class CreateStudyPlanController {
  constructor(readonly createPlanUseCase: CreatePlanUseCase) {}

  async run(req: Request, res: Response) {
    const data = req.body;
    console.log(data);
    try {
      const user = await this.createPlanUseCase.run(data.id_user, data.id_plan);

      if (user)
        //Code HTTP : 201 -> Creado
        res.status(200).send({
          status: "success",
          data: {
            id: user?.id,
            id_user: user?.id_user,
            id_plan: user?.id_plan,
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