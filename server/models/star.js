const mongoose = require('../db');

const Schema = mongoose.Schema

const StarSchema = new Schema({
  name: String,
  age: Number
}, { collection: 'stars' })  // 需要加上collection指定表名，不然查出的数据是[]，mongoose的梗

const Star = mongoose.model('stars', StarSchema);
module.exports = Star;