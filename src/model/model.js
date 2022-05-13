import Sequelize  from "sequelize/types";
import { connection } from "../database/connection.js";

export const tarefas = connection.define("modelo",{
    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true, 
        autoIncrement: true
    },
    data: {
        type: Sequelize.DATE,
        allowNull: false
    },
    horas: {
        type: Sequelize.TIME,
        allowNull: false
    },
    tarefa: {
        type: Sequelize.STRING,
        allowNull: false
    }
},{
    freezeTableName: true,
    createdAt: false,
    updateAt: false,
    timestamps: false
});

const initTable = async () => {
    try{
        await tarefas.sync()
    }
    catch(error){
        return error.message
    }
};