const mongoose = require('mongoose');

const lgaSchema = new mongoose.Schema({
    
  lga: {
      type: String
   },
   latitude:{
    type:String
},
  longitude:{
       type:String
  },
})

module.exports = mongoose.model('Lga', lgaSchema);