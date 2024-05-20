const mongoose = require('mongoose');

const srpSchema = new mongoose.Schema({
    
    
   lga:{
        type: mongoose.Schema.Types.ObjectId
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