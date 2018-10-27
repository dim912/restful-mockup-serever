
//Generic login middleware
const frontFilter = (req, res, next) => {
    log(req)
    next()
}

export default frontFilter

//logging input
const log = (req) => {
    console.log(req.method + req.url)
}


