var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var recordSchema = new Schema({
  status: String,
  created_at: Date,
});

module.exports = mongoose.model('Record', recordSchema);