const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {
    // Inserir dados

    proffyValue = {
        name: "Mayk Brito",
        avatar: "https://avatars2.githubusercontent.com/u/6643122?s=400&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4",
        whatsapp: "987654567",
        bio: "An instructor focused on helping people start programming for web"
        //  - #html #css #javascript #sql #react #nodejs #fullstack'
    }

    classValue = {
        subject: "Matemática",
        cost: "20"
        //proffy_id
    }

    classScheduleValues = [
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
            //class_id
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
            //class_id
        }
    ]

    await createProffy(db, { proffyValue, classValue, classScheduleValues })

    //Consultar dados
    // const selectedProffys = await db.all("SELECT * FROM proffys")
    // console.log(selectedProffys)
})