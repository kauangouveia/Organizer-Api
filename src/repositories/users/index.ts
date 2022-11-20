import { organizer } from "../../config/database/connection";


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


}


export default new UserRepository();