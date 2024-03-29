import  express  from "express";
import {
    getIndex,
    getDetalhes,
    getApagar,
    getCriar,
    postCriar
} from "../controller/controllador.js";

export const routers = express.Router();

routers.get("/", getIndex); 

routers.get("/detalhes/:id", getDetalhes);

routers.get("/apagar/:id", getApagar);

routers.get("/criar", getCriar);
routers.post("/criar", postCriar);