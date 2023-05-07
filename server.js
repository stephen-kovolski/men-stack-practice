
const express = require('express');
const dotenv = require('dotenv');

//Route FIles
const bootcamps = require('./routes/bootcamps')

//load .env variables
dotenv.config('./config/config.env')

const app = express();

//mount routers
app.use('/api/v1/bootcamps', bootcamps);

//access env variables with the process.env
const PORT = process.env.PORT || 3000


app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`));

