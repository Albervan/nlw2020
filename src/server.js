// Definições do servidor
const express = require('express')
const server = express()

const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require('./pages')

// Configuração nunjuck (template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true
})

// Execução do servidor
server
    //Receber dados do req.body
    .use(express.urlencoded({ extended: true }))
    //Definição da localização de estilos do servidor
    .use(express.static("public")) 
    //Definição das rotas do servidor
    .get("/", pageLanding)
    .get("/study", pageStudy)
    .get("/give-classes", pageGiveClasses)
    .post("/save-classes", saveClasses)
    //Definição da porta aberta e start do servidor
    .listen(5500)