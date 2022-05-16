import Sequelize  from "sequelize";
import { connection } from "../database/connection.js";

export const tarefas = connection.define("tarefas",{
    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true, 
        autoIncrement: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    data: {
        type: Sequelize.STRING,
        allowNull: false
    },
    hora: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
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

// initTable();