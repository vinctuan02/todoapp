import express from 'express'
import homeController from '../controller/homeController'

let router = express.Router()

let initRouter = (app) => {
    // router.get('/testView', homeController.testView)
    router.get('/helloworld', homeController.helloWorld)
    router.get('/getAllTask', homeController.getAllTask)

    router.post('/add-new-task', homeController.addNewTask)
    router.delete('/delete-task', homeController.deleteATask)

    return app.use('/', router)
}

module.exports = initRouter