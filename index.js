import express  from "express";
import path from "path";

const __dirname = path.resolve(path.dirname(''));

const app = express();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

const port = 3005;

app.listen(port, () =>{
    console.log(`rodando na porta ${port}`)
});

app.get("/",(req, res) =>{
    res.render("index.ejs")
});



