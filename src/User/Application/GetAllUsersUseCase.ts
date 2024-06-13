import { User } from "../Domain/User";
import { UserRepository } from "../Domain/UserRepository";

export class GetAllUsersUseCase{
    constructor(readonly productRepository: UserRepository) {}

    async run(): Promise< User[] | null> {
        try{
            const result = await this.productRepository.getAll();
            console.log(result);
            return result;
        } catch(error){
            console.log("Hubo un error al traer todos");
            return null;
        }
    }
}