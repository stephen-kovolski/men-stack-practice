const express = require('express')
// getting all the routes from ../controller/bootcamps
const { getBootcamps, 
        getBootcamp, 
        createBootcamp, 
        updateBootcamp, 
        deleteBootcamp
      } = require('../controllers/bootcamps')

const router = express.Router()


/*
This is im place of writting "/api/v1/bootcamps"
We attached the methodes we created in the middleware (controllers/bootcamps) to this route
Both getBootcamps and createBootcamps go to the same URL
The other ones (getBootcamp, updateBootcamp, deleteBootcamp all need an id.  They dont go to this URL they go to a different one)
*/
router.route('/').get(getBootcamps).post(createBootcamp)

router.route('/:id').get(getBootcamp).put(updateBootcamp).delete(deleteBootcamp)


module.exports = router;