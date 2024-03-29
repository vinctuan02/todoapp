import CRUDService from "../services/CRUDService"

let helloWorld = async (req, res) => {
    try {
        console.log("Hello world")
        return res.render('crud.ejs')
    } catch (e) {
        console.log(e)
    }
}

let getAllTask = async (req, res) => {
    try {
        let allTask = await CRUDService.getAllTask()
        return res.status(200).json(allTask)
    } catch (e) {
        console.log(e)
    }
}

let addNewTask = async (req, res) => {
    try {
        console.log('req.body: ', req.body)
        let message = CRUDService.addNewTask(req.body)
        return res.status(200).json(message.message)
    } catch (e) {
        console.log(e)
    }
}

let deleteATask = async (req, res) => {
    try {
        let idTask = req.query
        console.log('req.query: ', req.query)
        let message = CRUDService.deleteATask(idTask)
        return res.status(200).json(message)
    } catch (e) {
        console.log(e)
    }
}


module.exports = {
    helloWorld: helloWorld,
    getAllTask: getAllTask,
    addNewTask: addNewTask,
    deleteATask: deleteATask
}