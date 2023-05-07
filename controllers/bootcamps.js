// exporting each method so other files can use them.  Middleware functions
// The following are headers to describe what each function does

/*

    @description - GET all bootcamps
    @route - get request to /api/v1/bootcamps
    @access - public, everyone can use it.  Dont need to be an admin.
*/

exports.getBootcamps = (req, res, next) => {
    res.status(200).json({success: true, msg: "Show all bootcamps"})
}

/*
    @description - GET single bootcamps
    @route - get request to /api/v1/bootcamps/:id
    @access - public, everyone can use it.  Dont need to be an admin.
*/

exports.getBootcamp = (req, res, next) => {
    res.status(200).json({success: true, msg: `Get single bootcamp ${req.params.id}`})
}

/*
    @description - create new bootcamp
    @route - POST request to /api/v1/bootcamps
    @access - private, need to be an admin
*/

exports.createBootcamp = (req, res, next) => {
    res.status(200).json({success: true, msg: "Create new bootcamp"})
}

/*
    @description - update bootcamp
    @route - PUT request to /api/v1/bootcamps/:id
    @access - private, need to be an admin
*/

exports.updateBootcamp = (req, res, next) => {
    res.status(200).json({success: true, msg: `Update bootcamp ${req.params.id}`})
}

/*
    @description - delete bootcamp
    @route - DELETE request to /api/v1/bootcamps/:id
    @access - private, need to be an admin
*/

exports.deleteBootcamp = (req, res, next) => {
    res.status(200).json({success: true, msg: `Delete bootcamp ${req.params.id}`})
}