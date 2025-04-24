const createError = (message, code) => {
    const err = new Error(message)
    err.statusCode = code
    err.operational = true
    return err
}



module.exports = createError