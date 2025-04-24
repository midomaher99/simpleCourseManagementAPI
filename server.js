const dotEnv = require("dotenv")
dotEnv.config({ path: `${__dirname}/config.env` })
const mongoose = require('mongoose')
const app = require(`./app`)

const db = process.env.DATABASE
mongoose.connect("mongodb+srv://momaher190799:tOCZVt6y0UgBpCh0@cluster0.7bbs7mp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(() => { console.log("DB connected") })

const server = app.listen(3000, () => {
    console.log(`app is running on port:3000`)
});