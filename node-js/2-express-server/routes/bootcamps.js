const express = require('express');
const {
    getBootcamp, 
    getBootcamps,
    createBootcamp,
    updateBootcamp,
    deleteBootcamp
} = require('../controllers/bootcamps')

const router = express.Router();

// setting routes with controllers. a route can be linked to all methods that uses it
router.route('/')
    .get(getBootcamps)
    .post(createBootcamp)

router.route('/:id')
    .get(getBootcamp)
    .put(updateBootcamp)
    .delete(deleteBootcamp)

module.exports = router;

// setting routes versio without controllers
// router.get('/', (req,res) => {
    
// })
// router.get('/:id', (req,res) => {
    
// })
// router.post('/', (req,res) => {
    
// })
// router.put('/:id', (req,res) => { // : -> means parameter
    
// })
// router.delete('/:id', (req,res) => { // : -> means parameter
    
// })
