//carregando as extenções 
    const express = require('express')
    const handlebars = require('express-handlebars')
    const bodyParser = require('body-parser')
    const app = express()
    const mongoose = require('mongoose')
    const path = require("path")
//chamando a pagina admin modularizada
    const admin = require("./routs/admin")
//configurações 
    //rotas/configurações para o body-parser
        app.use(bodyParser.urlencoded({extended:true}))
        app.use(bodyParser.json())
    //rotas/cconfigurações para o handlebars
        app.engine('handlebars', handlebars({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')
    //mongoose
        //em breve
    //public
        //aqui mostramos que todos os arquivos estatigos do codigos estão na pasta public
        //__dirname pega o caminho abssoluto para a pasta public assim evitando erros de escrita no caminho
        app.use(express.static(path.join(__dirname,public)))

//rotas
    //e aqui vamos definir as rotas de outras aplicações modularizadas
    //esse /admin no inicio é um prefixo para a barra de pesquisa, e esse prefixo vai ser implementado em outras rotas dentro do admin.
        app.use('/admin', admin)
    //também é possivel inserir as rotas da mesma forma qu está no admin com o (req/res)

//config de conexão
    const PORT = 8081
    app.listen(PORT,() => {
        console.log("Servidor em pleno funcionamento!")
    })
// => é a abreviação de uma function