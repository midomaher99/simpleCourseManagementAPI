const dotEnv = require("dotenv")
dotEnv.config({ path: `${__dirname}/config.env` })
const mongoose = require('mongoose')
const app = require(`./app`)

const db = process.env.DATABASE
mongoose.connect(db).then(() => { console.log("DB connected") })

const server = app.listen(3000, () => {
    console.log(`app is running on port:3000`)
});