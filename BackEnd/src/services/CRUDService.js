import db from "../models"

let getAllTask = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let allTask = await db.Tasks.findAll()
            console.log("all task: ", allTask)
            resolve({
                errorCode: 0,
                data: allTask
            })
        } catch (e) {
            reject(e)
        }
    })
}

let addNewTask = (data) => {
    console.log(data.task_name)
    return new Promise(async (resolve, reject) => {
        try {
            await db.Tasks.create({
                task_name: data.task_name,
                is_completed: data.is_completed
            })
            console.log("CRUDService: add new taks was completed")
            resolve({
                errorCode: 0,
                message: 'add new taks was completed'
            })
        } catch (e) {
            reject({
                errorCode: -1,
                message: `Can't add new task`
            })
        }
    })
}


let deleteATask = (idTask) => {
    return new Promise(async (resolve, reject) => {
        try {
            let task = await db.Tasks.findOne({
                where: { task_name: '2' }
            })
            let allTask = await db.Tasks.findAll()
            console.log("task: ", task)
            console.log("allTask: ", allTask)

            if (!task) {
                console.log("Task is not exist")
                resolve({
                    errorCode: -1,
                    message: `Task is not exist`
                })
            }

            await db.Tasks.destroy({
                where: { id: idTask }
            })
            resolve({
                errorCode: 0,
                message: `Task was deleted`
            })
        } catch (e) {
            reject(e)
        }
    })
}

module.exports = {
    getAllTask: getAllTask,
    addNewTask: addNewTask,
    deleteATask: deleteATask
}