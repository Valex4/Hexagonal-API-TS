import { CreateUserUseCase } from "../Application/CreateUserUseCase";
import { GetAllUsersUseCase } from "../Application/GetAllUsersUseCase";
import { CreateUserController } from "./Controllers/CreateUserController";
import { GetAllUserController } from "./Controllers/GetAllUserController";
import { MysqlUserRepository } from "./MysqlUserRepository";


export const mysqlProductRepository = new MysqlUserRepository();

export const createUserUseCase = new CreateUserUseCase(
    mysqlProductRepository 
);

export const getAllUseCase = new GetAllUsersUseCase(mysqlProductRepository);

export const createUsercontroller = new CreateUserController(createUserUseCase);

export const getAllUserController = new GetAllUserController(getAllUseCase);

