const express = require('express')
const router = express.Router()



//ROUTES
router.get('/', function (req, res){
    res.status(200).json({success: true, msg: "Show all bootcamps"})
});

router.get('/:id', function (req, res){
    res.status(200).json({success: true, msg: `Get single bootcamp ${req.params.id}`})
});

router.post('/', function (req, res){
    res.status(200).json({success: true, msg: "Create new bootcamp"})
});

router.put('/:id', function (req, res){
    res.status(200).json({success: true, msg: `Update bootcamp ${req.params.id}`})
});

router.delete('/:id', function (req, res){
    res.status(200).json({success: true, msg: `Delete bootcamp ${req.params.id}`})
});


module.exports = router;