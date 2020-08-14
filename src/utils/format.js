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
function getSubject(subjectNumber) {
    // O "+" na frente da variável garante que ela é um número
    const subjectIndex = +subjectNumber - 1

    return subjects[subjectIndex]
}

function convertHoursToMinutes(time) {
    const [hours, minutes] = time.split(':') // "split" é uma função de strings para separar a string em um array
    return Number( (hours * 60) + minutes )
}

module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinutes
}