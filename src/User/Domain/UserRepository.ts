import { User } from "./User";

export interface UserRepository{
    getAll(): Promise<User[] | null>;
    createUser(
        name: string,
        phone: string,
      ): Promise<User | null>;
}