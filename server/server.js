require('dotenv').config()
const express = require('express')
const sequelize = require('./database')
const models = require('./models/models')
const cors = require('cors')
const router = require ('./routes/index')
const PORT = process.env.PORT || 5000
const errorHandler = require ('./middleware/error-handler-middleware')
const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', router)

//Обработка ошибок, полсдений Middleware
app.use(errorHandler)

const start = async () => {
    try{
        await sequelize.authenticate()
        await sequelize.sync()

        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start() 