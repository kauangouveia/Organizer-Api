import { organizer } from "../../config/database/connection";
import crypto from 'crypto'


interface userData {
    name: string,
    cpf: string,
    password: string,
    email: string;
}

class UserRepository {


    async create(user: userData) {
        return await organizer("tb_user").insert({
            name: user.name,
            cpf: user.cpf,
            password: user.password,
            email: user.email,
        });
    }

    async findUserByEmailAndPassword(email: string, password: string) {
        return await organizer("tb_user").select({
            email: "email",
            name: "name",
            id: "id_user",
        }).where("email", email)
            .andWhere("password", password)
            .first()
    }

    

}


export default new UserRepository();