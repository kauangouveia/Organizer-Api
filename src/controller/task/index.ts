import { JwtPayload, verify } from 'jsonwebtoken';
import { TOKEN } from './../../utils/constants';
import UserRepository from "../../repositories/users/index";
import crypto from 'crypto'
import { badRequestWithErrors } from "../../utils/response";
import { generateToken } from "../../utils/token";
import TaskRepository from '../../repositories/task/index'


interface dataToken {
    id: number,
    email: string,
    name: string,
    iat: number,
    exp: number
}

class TaskController {

    async create(req, res) {

        const [Bearer, token] = req.headers.authorization.split(" ");

        const userId: dataToken | any = verify(token, TOKEN.SECRET);


        const newData = {
            id_user: userId.id,
            ...req.body
        }

        await TaskRepository.create(newData)

        try {
            return res.status(200).json({
                message: "tarefa registrada com sucesso",
            });
        } catch (error) {
            return res.status(500).json({
                message: "Erro ao adicionar tarefa",
            });
        }


    }

    async findTask(req, res) {
        const [Bearer, token] = req.headers.authorization.split(" ");

        const userId: dataToken | any = verify(token, TOKEN.SECRET);


        const listTask = await TaskRepository.findTaskByIdUser(userId.id)

        try {
            return res.status(200).json({
                message: "tarefa listada com sucesso",
                listTask
            });
        } catch (error) {
            return res.status(500).json({
                message: "Erro ao listar tarefa",
            });
        }

    }
    async deleteTask(req, res) {
        const { id } = req.body
        const remove = await TaskRepository.removeTask(id)
        try {
            return res.status(200).json({
                message: "Tarefa deletada com sucesso",
            });
        } catch (error) {
            return res.status(500).json({
                message: "Erro ao deletar a tarefa",
            });
        }
    }

}


export default new TaskController();
