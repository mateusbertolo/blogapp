const express = require("express")
//esse é o ccomponente para criar as rotas modularizando o file
const router = express.Router()

//rota para o painel administrativo
//o router vem primeirro para definir a rota!
//a '/' é ccomo um prefixo para a barra de pesquisa.
router.get('/',(req, res) => {
    res.render("admin/index")
})
//rota para a listagem de posts 
router.get('/posts', (req, res) => {
    res.send("Página de posts")
})
//rota para o cadastro de categorias
router.get("/categorias", (req, res) => {
    res.send("Página de Categórias")
})




//para a modularização ddo código, os codigos devem estar entre essa ultima linha
mobile.exports = router