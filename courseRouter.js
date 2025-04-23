const express = require("express")
const courseController = require(`${__dirname}/courseController`)
const router = express.Router()

router.get('/', courseController.getAllCourses)
router.get('/:id', courseController.getCourseById)
router.post('/', courseController.createCourse)
router.put('/:id', courseController.updateCourse)
router.delete('/:id', courseController.deleteCourse)

module.exports = router