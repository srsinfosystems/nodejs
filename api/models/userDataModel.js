'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserDataSchema = new Schema({
  	
  name: {
    type: String,
    required: 'Enter the Name',
    unique:true
  },
  address1: {
    type: String
    
  },
  address2: {
    type: String
    
  },
  city: {
    type: String
    
  },
  zip: {
    type: Number
   
  },
  state: {
    type: String
    
  },
  country: {
    type: String
    
  },
  cellphone: {
    type: Number
    
  },
  phone: {
    type: Number
   
  },
  Created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('UserDatas', UserDataSchema);

