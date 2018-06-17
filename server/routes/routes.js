//server/routes/routes.js
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var Record = require('../../models/Record');

router.get('/', (req, res) => {
  res.render('index')
});

router.get('/latest', (req, res) => {
  res.render('index')
})


router.get('/api/latest', (req, res) => {
  Record.findOne({}, {}, { sort: { '_id': -1 } }, function(err, newStatus) {
   if (err) {
     res.send(err);
   } else {
     res.json(newStatus);
   }
  });
})



  // res.render('index')

module.exports = function(io) {
  router.post('/api/insert', (req,res) => {
    var record = new Record(
      { status: req.query.status, 
        created_at: new Date()
      }
    );
  
    record.save(err => {
      if (err) {
        res.send(err);
      } else {
        io.emit('is door closed', record);
        res.send('record successfully added!');  
      }
    });
  })

  return router;
}

// router.get('/getAll', (req, res) => {
//   var monthRec = req.query.month;
//   var yearRec = req.query.year;
//   if(monthRec && monthRec != 'All'){
//    Expense.find({$and: [ {month: monthRec}, {year: yearRec}]}, function(err, expenses) {
//     if (err)
//      res.send(err);
//     res.json(expenses);
//    });
//   } else {
//    Expense.find({year: yearRec}, function(err, expenses) {
//     if (err)
//      res.send(err);
//     res.json(expenses);
//    });
//   }
// })

