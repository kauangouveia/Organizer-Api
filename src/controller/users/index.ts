import UserRepository from "../../repositories/users/index";
import crypto from 'crypto'
import { badRequestWithErrors } from "../../utils/response";
import { generateToken } from "../../utils/token";



class UserController {

    async create(req, res) {


        const [user] = await UserRepository.create(req.body)
        return res.json({
            message: "cliente registrado com sucesso",
        });
    }

    async login(req, res) {
        const { email, password } = req.body;

        const user = await UserRepository.findUserByEmailAndPassword(
            email,
            password
        );

        if (!user) {
            badRequestWithErrors(res, "usuário não encontrado", [
                {
                    param: "email/password",
                    message: "email ou senha invalidos",
                },
            ]);
        }


        const token = generateToken(
            user.id,
            user.name,
            email
        );
        
        return res.json({ user, token });
    }

}


export default new UserController();
