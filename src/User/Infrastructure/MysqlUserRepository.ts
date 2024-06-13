import { query } from "../../database/mysql";
import { User } from "../Domain/User";
import { UserRepository } from "../Domain/UserRepository";

export class MysqlUserRepository implements UserRepository{

    async getAll(): Promise<User[] | null >{
        const sql = "SELECT * FROM users";
        try{
            const [data]: any = await query(sql, []);
            const usersData = Object.values(JSON.parse(JSON.stringify(data)));
            return usersData.map(
                (user: any) =>
                  new User(
                    user.id,
                    user.name,
                    user.phone
                  )
            );
        }catch (error) {
            return null;
        }
    }

    async createUser(name: string, phone: string): Promise<User | null> {
        const sql = "INSERT INTO users (name, phone) VALUES (?, ?)"
        const params: any[] = [name, phone];
        try {
            const [result]: any = await query(sql, params);
            return new User(result.insertId, name, phone);
          } catch (error) {
            return null;
          }
    }
}