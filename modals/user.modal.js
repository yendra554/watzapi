const mongoose = require("mongoose");
const timestamp = require("mongoose-timestamp");
const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    userType:{
        type: Number
    },
    password:{
        type: String
    }
},
{ collection: 'users' })

userSchema.plugin(timestamp, {
    createdAt: "created_at",
    updatedAt: "updated_at"
});

module.exports = mongoose.model("users",userSchema);
