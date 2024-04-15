const mongoose = require('mongoose');

const UserSchema = mongoose.Schema(
    {
        id:{
            type: Number,
            required: true,
            unique:true
        },
        first_name:{
            type: String,
            required: true
        },
        last_name:{
            type: String,
            required: true
        },
        birthday:{
            type: Date,
            required:true
        }

    }
);

const User = mongoose.model("User",UserSchema);

module.exports= User;