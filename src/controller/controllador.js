import { connection } from "../database/connection.js";
import { tarefas } from "../model/tarefas.js";

export const getIndex = async (req, res) => {
  try {
    const monstraTarefas = await tarefas.findAll();
    res.render("index.ejs",{
        monstraTarefas
    });
  } catch (error) {
    res.send(error.message);
  }
};


