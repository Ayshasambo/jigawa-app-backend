const mongoose = require('mongoose');

const tempSchema = new mongoose.Schema({
    lga:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"Lga"
    },
    january:{
        day:{
            type: String
        },
        night:{
            type: String
        }
    },
    february:{
        day:{
            type: String
        },
        night:{
            type: String
        }
    },
    march:{
        day:{
            type: String
        },
        night:{
            type: String
        }
    },
    april:{
        day:{
            type: String
        },
        night:{
            type: String
        }
    },
    may:{
        day:{
            type: String
        },
        night:{
            type: String
        }
    }
});

module.exports = mongoose.model('Temp', tempSchema);

