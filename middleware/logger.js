/*
@description 
middle ware
Logs request to console
Looks like this in the console
GET http://undefined/api/v1/bootcamps
POST http://undefined/api/v1/bootcamps
*/

const logger = (req, res, next) => {
    console.log(`${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
}

module.exports = logger;