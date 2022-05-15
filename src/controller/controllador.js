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

export const getDetalhes = async(req, res) => {
  try{
    const detalhesTarefas = await tarefas.findByPk(req.params.id);

    res.render("detalhes.ejs", {
      detalhesTarefas
    });

  }catch(error){
    res.send(error.message);
  }
};

export const getApagar = async(req, res) => {
  try{
    await tarefas.destroy({
      where: {
        id: req.params.id
      }
    });
    res.redirect("/");

  }catch(error){
    res.send(error.message);
  }
}


