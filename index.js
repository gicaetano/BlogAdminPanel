const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");

const categoriesController = require("./categories/CategoriesController");
const articlesController = require("./articles/ArticlesController");

const Article = require("./articles/Article");
const Category = require("./categories/Category");

port = 8080;

//View engine
app.set('view engine', 'ejs');

//Static assets
app.use(express.static('public'));

//Body Parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Conectar ao banco
connection
    .authenticate()
    .then(() => {
        console.log("Banco conectado com sucesso");
    })
    .catch((error) => {
        console.log(error);
    })

app.use("/", categoriesController);
app.use("/", articlesController);


app.get("/", (req, res) => {
    res.render("index");
});


app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});