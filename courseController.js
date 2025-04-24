const Course = require(`${__dirname}/courseModel`)
const catchAsync = require(`${__dirname}/catchAsync`)
const createError = require(`${__dirname}/createError`)
module.exports.getAllCourses = catchAsync(async (req, res, next) => {
    const courses = await Course.find()
    res
        .status(200)
        .json({
            status: "success",
            data: {
                courses
            }
        }
        )
})
module.exports.getCourseById = catchAsync(async (req, res, next) => {
    const course = await Course.findById(req.params.id)
    if (!course) {
        throw createError("Invalid Course ID", 400)
    }
    res
        .status(200)
        .json({
            status: "success",
            data: {
                course
            }
        }
        )
})
module.exports.createCourse = catchAsync(async (req, res, next) => {

    const newCourse = await Course.create(req.body)
    res
        .status(201)
        .json({
            status: 'success',
            data: {
                newCourse
            }
        })
})
module.exports.updateCourse = catchAsync(async (req, res, next) => {
    const updatedCourse = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidator: true })

    if (!updatedCourse) {
        throw createError("Invalid Course ID", 400)
    }
    res
        .status(200)
        .json({
            status: 'success',
            data: {
                updatedCourse
            }
        })
})
module.exports.deleteCourse = catchAsync(async (req, res, next) => {
    const deletedCourse = await Course.findByIdAndDelete(req.params.id)
    if (!deletedCourse) {
        throw createError("Invalid Course ID", 400)
    }
    res
        .status(204)
        .json({})
})