
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan')

//load .env variables
dotenv.config({ path: './config/config.env' });

//Route FIles
const bootcamps = require('./routes/bootcamps')

const app = express();

// Dev loggin middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

//mount routers
app.use('/api/v1/bootcamps', bootcamps);

//access env variables with the process.env
const PORT = process.env.PORT || 3000

const server = app.listen(PORT, console.log( `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))
