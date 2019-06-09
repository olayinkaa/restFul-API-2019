const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({

            FirstName: String,
            LastName: String,
            Email:{
                type: String,
                required: true
            },
            Password: {
                type: String,
                required: true
            },
            Age: Number,
            Team: String

});

module.exports = mongoose.model('User',UserSchema);



