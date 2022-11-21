import { organizer } from "../../config/database/connection";
import { zonedTimeToUtc, utcToZonedTime, format } from 'date-fns-tz'

interface taskData {
    priority: string,
    task: 'ALTA' | 'MÉDIA' | 'BAIXA',
    id_user: number
}

const utcDate = zonedTimeToUtc('2018-09-01 18:01:36.386', 'Europe/Berlin')

class TaskRepository {

    async create(task: taskData) {

        return await organizer("tb_task").insert({
            priority: task.priority,
            task: task.task,
            id_user: task.id_user
        });
    }

    async findTaskByIdUser(id: number) {
        return await organizer("tb_task").select("*").where("tb_task.id_user", id).andWhere('finished_at', null)
    }


    async removeTask(id: number) {
        return await organizer("tb_task").select("*").where("tb_task.id_task", id).update('finished_at', new Date())
    }


}


export default new TaskRepository();