module.exports = async function(db, { proffyValue, classValue, classScheduleValues }) {
    // "await" funciona como o ".then", fazendo aguardar a conclusão do processo para passar para a próxima linha
    // para utilizar o "await" dentro de uma função, não declaração é necessário a palavra chave "async"

    console.log(proffyValue)
    // const insertedProffy = 
    const insertedProffy = await db.run(`
        INSERT INTO proffys (
            name,
            avatar,
            whatsapp,
            bio
        ) VALUES (
            "${proffyValue.name}",
            "${proffyValue.avatar}",
            "${proffyValue.whatsapp}",
            "${proffyValue.bio}"
        );
    `)

    // const proffy_id = insertedProffy.lastID

    // const insertedClass = await db.run(`
    //     INSERT INTO classes (
    //         subject,
    //         cost,
    //         proffy_id
    //     ) VALUES (
    //         "${classValue.subject}",
    //         "${classValue.cost}",
    //         "${proffy_id}"
    //     );
    // `)

    // const class_id = insertedClass.lastID

    //Trabalhando com laço no array
    // const insertedAllClassScheduleValues = classScheduleValues.map((classScheduleItem) => {
    //     return db.run(`
    //         INSERT INTO class_schedule (
    //             class_id,
    //             weekday,
    //             time_from,
    //             time_to
    //         ) VALUES (
    //             "${class_id}",
    //             "${classScheduleItem.weekday}",
    //             "${classScheduleItem.time_from}",
    //             "${classScheduleItem.time_to}"
    //         );
    //     `)
    // })

    // await Promise.all(insertedAllClassScheduleValues)
}