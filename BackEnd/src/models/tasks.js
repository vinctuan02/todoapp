'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Tasks extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    Tasks.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        task_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        is_completed: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    },
        {
            timestamps: false,
            sequelize,
            modelName: 'Tasks',
            freezeTableName: true
        }
    );
    return Tasks;
};