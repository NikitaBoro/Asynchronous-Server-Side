const mongoose = require('mongoose');

const DevSchema = mongoose.Schema(
    {
        firstname:{
            type: String,
            required: true
        },
        lastname:{
            type: String,
            required: true
        },
        id:{
            type: Number,
            required:true
        },
        email:{
            type:String,
            required:true
        }

    }
);

const Dev = mongoose.model("Dev",DevSchema);

module.exports= Dev;