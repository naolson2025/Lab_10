var express = require('express');
var States = require('../models').States;

var router = express.Router();

router.get('/states', function (req, res, next) {
    States.findAll({order: ['name']})
        .then(states =>{
            return res.json(states)
        })
        .catch(err => next.err())
});

// handle requests to /states/:name
router.get('/states/:name', function (req, res, next) {
    // Query that finds the state name in the database and returns json or not found error
   States.findOne({where: {name: req.params.name}})
       .then(state => {
           if (state){
               return res.json(state)
           } else {
               return res.status(404).send()
           }
       })
       // handle other errors
       .catch(err => next.err())
});


// matches with /state/?anything?
router.patch('/state/:name', function (req, res, next) {
    // sends data if state has been vistited or not
    States.update({visited: req.body.visited}, {where: {
            name: req.params.name
        }})
        .then(rows =>{
            if (rows){
                return res.send('ok')
            } else {
                // if no rows are modified return 404
                return res.status(404).send()
            }
        })
        // catch other errors
        .catch(err => next.err())
});

module.exports = router;



