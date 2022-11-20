import UserRepository from "../../repositories/users/index";

class UserController {

    async create(req, res) {

        const [user] = await UserRepository.create(req.body)

        return res.json({
            message: "cliente registrado com sucesso",
        });
    }

}


export default new UserController();
