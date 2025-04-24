const mongoose = require('mongoose')
const app = require(`./app`)

const db = 'mongodb://127.0.0.1:27017/CourseManagement'
mongoose.connect(db).then(() => { console.log("DB connected") })

const server = app.listen(3000, () => {
    console.log(`app is running on port:3000`)
});