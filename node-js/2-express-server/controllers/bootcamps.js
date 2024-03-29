const Bootcamp = require('../models/Bootcamps')

// @desc        Get all bootcamps
// @route       GET /api/v1/bootcamps
// @access      Public
exports.getBootcamps = async (req, res, next) => {
    try {
        const bootcamps = await Bootcamp.find();
        res.status(200).json({ 
            success: true,
            count: bootcamps.length,
            data: bootcamps
        })
    } catch (err) {
        res.status(400).json({success: false})
    }
}

// @desc        Get a single bootcamp
// @route       GET /api/v1/bootcamps/:id
// @access      Public
exports.getBootcamp = async (req, res, next) => {
    try {
        const bootcamps = await Bootcamp.findById(req.params.id);
        if(!bootcamp) {
            return res.status(400).json({ success: false})
        }
        res.status(200).json({ success: true, data: bootcamps})
    } catch (err) {
        res.status(400).json({success: false})
    }
}

// @desc        Create a single bootcamp
// @route       POST /api/v1/bootcamps
// @access      Private
exports.createBootcamp = async (req, res, next) => {
    const bootcamp = await Bootcamp.create(req.body)// need data from the client (inside req.body) to insert into database
    
    res.status(201).json({ // sending a response to the request
        success: true,
        data:bootcamp
    })
}

// @desc        Update a single bootcamp
// @route       PUT /api/v1/bootcamps/:id
// @access      Private
exports.updateBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        if(!bootcamp) {
            return res.status(400).json({success: false})
        }
        res.status(200).json({success: true, data: bootcamp})    
    } catch (error) {
        res.status(400).json({success: false})
    }
}

// @desc        Delete a single bootcamps
// @route       DEL /api/v1/bootcamps/:id
// @access      Public
exports.deleteBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id)
        if(!bootcamp) {
            return res.status(400).json({success: false})
        }
        res.status(200).json({success: true, data: {}})    
    } catch (error) {
        res.status(400).json({success: false})
    }
}