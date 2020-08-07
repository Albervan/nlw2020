const proffys = [
    { name: "Albervan Bergamasco Davies", 
        avatar: "https://avatars2.githubusercontent.com/u/54541416?s=460&v=4" ,
        whatsapp: "(66) 99 998-5112", 
        bio: "Para confundir os que são com os que não são.<br><br>Comissionado a dismistificar o comportamento cristão genuino, aplicando a verdadeira lei da liberdade sem cadeias de religiosidade humana, seguindo o propósito celestial de edificar o corpo da igreja do SENHOR.", 
        subject: "Física", 
        cost: "55,00", 
        weekday: [1, 2], 
        time_from: [720], 
        time_to: [1220]
    },

    { name: "Diego Fernandes", 
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "(66) 99 968-0172", 
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
        subject: "Química", 
        cost: "20,00", 
        weekday: [4], 
        time_from: [1720], 
        time_to: [2220]
    }
]

function pageLanding(req, res) {
    return res.sendfile(__dirname + "/views/index.html")
}
function pageStudy(req, res) {
    return res.sendfile(__dirname + "/views/study.html")
}
function pageGiveClasses(req, res) {
    return res.sendfile(__dirname + "/views/give-classes.html")
}

const express = require('express')
const server = express()

server
    .use(express.static("public")) //Definição da localização de estilos do servidor
    //Definição das rotas do servidor
    .get("/", pageLanding)
    .get("/study", pageStudy)
    .get("/give-classes", pageGiveClasses)
    //Definição da porta aberta para o servidor
    .listen(5500)