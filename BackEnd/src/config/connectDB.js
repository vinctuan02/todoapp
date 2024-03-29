import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('DBToDoApp', 'root', '', {
    host: 'localhost',
    port: 3307,
    dialect: 'mysql'
});

let connectDB = async () => {
    try {
        await sequelize.authenticate()
        console.log("Connect to DB was successed")
    } catch {
        console.log("Erorr! Connect to DB was failed")
    }
}

module.exports = connectDB