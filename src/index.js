import app from './app.js'
import { sequelize } from './database/database.js'
import './models/Project.js'
import './models/Task.js'

async function main()
{
    try {
            //await sequelize.authenticate()  //Verifica la coneccion a la base de datos
            //await sequelize.sync() // Crea las tablas si no existen
            await sequelize.sync({force: true}) // Borra las tablas y despues las vuelve a crear
            //console.info('Connection has been established successfully.')
            app.listen(3000)
            console.info('Server is listening  on port', 3000)
    }
    catch(error){
        console.error('Unable to connect to the database: ', error)
    }
}

main()