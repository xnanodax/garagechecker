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
   Record.findOne({}, {}, { sort: { '_id': -1 } }, function(err, expenses) {
    if (err) {
      res.send(err);
    } else {
      res.json(expenses);
    }
   });
})



module.exports = router;

router.post('/api/insert', (req,res) => {
  var record = new Record();
  record.status = 'True';
  record.created_at = new Date;

  record.save(err => {
      if (err)
        res.send(err);
      res.send('record successfully added!');
  });

  res.render('index')
})

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

