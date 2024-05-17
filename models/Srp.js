const mongoose = require('mongoose');

const srpSchema = new mongoose.Schema({
    
    
   name:{
        type: String
    },
    onset:{
        type: String
    },
    seasonend:{
        type: Number
    },
    seasonlength:{
        type: Number
    },
    annualrainfall:{
        type: Number
    }
});

module.exports = mongoose.model("Srp", srpSchema);