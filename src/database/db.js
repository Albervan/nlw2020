const database = require('sqlite-async')

function execute(db) {
    //Criar as tabelas do BD
    return db.exec(`
        CREATE TABLE IF NOT EXISTS proffys (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            avatar TEXT,
            whatsapp TEXT,
            bio TEXT
        );

        CREATE TABLE IF NOT EXISTS classes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            subject TEXT,
            cost TEXT,
            proffy_id INTEGER
        );

        CREATE TABLE IF NOT EXISTS class_schedule (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            class_id INTEGER,
            weekday INTEGER,
            time_from INTEGER,
            time_to INTEGER
        );
    `)
}

module.exports = database.open(__dirname + '/database.sqlite').then(execute)
// Se não existir o arquivo do bd, ele é criado nesse momento
// o "then" garante que o banco de dados estará aberto ao continuar a execução
// "module.exports" me permite disponibilizar o objeto para ser chamado em outro local pelo "require"