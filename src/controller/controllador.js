import { connection } from "../database/connection.js";
import { tarefas } from "../model/tarefas.js";

export const getIndex = async(req, res) =>{
    const alunos = await connection.query("SELECT * FROM tarefas", {
        model: tarefas
    })
    res.render("index.ejs")
}




// import { response } from "express";
// import { connection } from "../database/connection.js";
// import { tarefas } from "../model/tarefas.js";

// export const getIndex = async (req, res) => {
//     try {
//         const exibiTarefas = await tarefas.findAll();
//         res.render("index.ejs",{
//             exibiTarefas,
//         });
//     } catch (error) {
//         res.send(error.message);
//     }
// };