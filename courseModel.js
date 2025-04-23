const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Course must have a title"],
        },
        description: {
            type: String,
            required: [true, "Course must have a description"],
        },
        image: {
            type: String
        },
        startDate: {
            type: Date
        },
        endDate: {
            type: Date,
            validate: {
                validator: function (end) {
                    return this.startDate < end
                },
                message: "endDate must be AFTER startDate"
            }
        },
        price: {
            type: Number,
            required: [true, "Course must have a price"]
        }
    },
    {
        timestamps: true
    }
);
//to do
//1. check that image is url or base64
//2. add update middleware to validate that end date is after start date

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;