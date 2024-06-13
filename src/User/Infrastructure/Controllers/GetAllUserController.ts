import { Request, Response } from "express";

import { GetAllUsersUseCase } from "../../Application/GetAllUsersUseCase";

export class GetAllUserController{
    constructor(readonly getAll : GetAllUsersUseCase){}

    async run(req: Request, res: Response){
        try {
            const users = await this.getAll.run();
            console.log(users);
            if (users)
              //Code HTTP : 200 -> Consulta exitosa
              res.status(200).send({
                status: "success",
                data: users.map((product: any) => {
                  return {
                    id: product.id,
                    name: product.name,
                    phone: product.phone,
                  };
                }),
              });
            else
              res.status(400).send({
                status: "error",
                msn: "Ocurrio algún problema",
              });
          } catch (error) {
            //Code HTTP : 204 Sin contenido
            res.status(204).send({
              status: "error",
              data: "Ocurrio un error",
              msn: error,
            });
          }
    }
}