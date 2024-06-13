import { User } from "../Domain/User";
import { UserRepository } from "../Domain/UserRepository";

export class CreateUserUseCase{
    constructor(readonly productRepository: UserRepository) {}

    async run(
        name: string,
        phone: string,
      ): Promise< User | null>{
        try {
            const product = await this.productRepository.createUser(
              name,
              phone
            );
            return product;
          } catch (error) {
            return null;
          }
      }
}