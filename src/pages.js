const database = require('./database/db')

// Desestruturar os objetos da origem
const { subjects, weekdays, getSubject, convertHoursToMinutes } = require('./utils/format.js')

function pageLanding(req, res) {
    return res.render("index.html")
}

async function pageStudy(req, res) {
    const filters = req.query //Recebe os parametros da página (Informações que ficam após o "?")

    // O sinal "!" significa negação (NOT)
    // O sinal "||" significa "OU"
    if (!filters.subject || !filters.weekday || !filters.time) {
        return res.render("study.html", { filters, subjects, weekdays })
    }

    //converter horas em minutos
    const filterMinutes = convertHoursToMinutes(filters.time)

    const query = `
        SELECT classes.*, proffys.*
        FROM proffys
            JOIN classes ON (proffys.id = classes.proffy_id)
        WHERE EXISTS(
            SELECT class_schedule.*
            FROM class_schedule
            WHERE class_schedule.class_id = classes.id
                AND class_schedule.weekday = ${filters.weekday}
                AND class_schedule.time_from <= ${filterMinutes}
                AND class_schedule.time_to > ${filterMinutes}
        )
        AND classes.subject = "${filters.subject}"
    `
    
    try {
        const db = await database
        const proffys = await db.all(query)

        return res.render('study.html', { proffys, subjects, filters, weekdays })

    } catch (error) {
        console.log(error)
    }
}

function pageGiveClasses(req, res) {
    const data = req.query
    
    // Indentificar se o objeto não está vazio
    const isNotEmpty = Object.keys(data).length > 0

    //Se tiver dados adicionar ao array proffys
    if (isNotEmpty) {
        // Ajustar a informação do subject
        data.subject = getSubjectName(data.subject)

        //Adiciona os dados ao array
        proffys.push(data)

        // Redirecionar para a página "study"
        return res.redirect("/study")
    }

    // Se não, limpar a página
    return res.render("give-classes.html", { subjects, weekdays })
}

module.exports = {
    pageLanding,
    pageStudy,
    pageGiveClasses
}