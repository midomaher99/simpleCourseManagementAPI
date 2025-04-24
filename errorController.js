const errController = (err, req, res, next) => {

    if (err.name === 'ValidationError') {
        const message = Object.values(err.errors)
            .map(val => val.message)
            .join(', ');
        res
            .status(400)
            .json({
                status: 'failed',
                message: message,
            })
    }
    else if (err.name === 'CastError') {
        // Handle Mongoose cast errors (invalid type or ObjectId)
        const message = `Invalid value for ${err.path}: ${err.value}`;
        res.status(400).json({
            status: 'failed',
            message: message,
        });
    }
    else if (err.operational === true) {
        res
            .status(err.statusCode)
            .json({
                status: "failed",
                message: err.message
            })

    } else {
        console.log(err)
        res
            .status(500)
            .json({
                status: "failed",
                message: "Something went wrong"
            })
    }
}

module.exports = errController