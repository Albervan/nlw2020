// Dados da aplicação
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
    },

    { name: "Geicy Dayane Morales Bezerra Davies", 
        avatar: "https://scontent-gru2-2.xx.fbcdn.net/v/t1.0-1/p160x160/58704148_826398274384470_2630340669033414656_o.jpg?_nc_cat=100&_nc_sid=dbb9e7&_nc_eui2=AeGMW5BOhh1wNVLwBTCYp6MZ7cwzdpyeGCztzDN2nJ4YLGxdWM1K4y8fLGtYBDKAtUeymNskRUDYZ9dSB72WcqRs&_nc_ohc=s1Rn1vIiHtIAX9XyO9J&_nc_ht=scontent-gru2-2.xx&_nc_tp=6&oh=a1e4f0584d94deb53b438b778518b94f&oe=5F54B561",
        whatsapp: "(66) 99 964-6252", 
        bio: "Muito hablidosa com crianças para atrair a atenção com foco na aprendizagem prazerosa.<br><br>Tem grande capadida com necessidades especiais com formação em Neuro-piscologia e altas habilidades.", 
        subject: "Português", 
        cost: "120,00", 
        weekday: [2], 
        time_from: [11720], 
        time_to: [12220]
    }
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

// Funcionalidades da aplicação
function pageLanding(req, res) {
    return res.render("index.html")
}
function pageStudy(req, res) {
    const filters = req.query //Recebe os parametros da página (Informações que ficam após o "?")
    return res.render("study.html", { proffys, filters, subjects, weekdays }) //Passando parametros do back-en para o front-end
}
function pageGiveClasses(req, res) {
    return res.render("give-classes.html", { subjects, weekdays })
}

// Definições do servidor
const express = require('express')
const server = express()
const nunjucks = require('nunjucks')

// Configuração nunjuck (template engine)
nunjucks.configure('src/views', {
    express: server,
    noCache: true
})

// Execução do servidor
server
    //Definição da localização de estilos do servidor
    .use(express.static("public")) 
    //Definição das rotas do servidor
    .get("/", pageLanding)
    .get("/study", pageStudy)
    .get("/give-classes", pageGiveClasses)
    //Definição da porta aberta e start do servidor
    .listen(5500)