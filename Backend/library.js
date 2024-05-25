const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
    {
        CarName: String,
        Manufacturer: String,
        Year: String,
        DriveType: String,
        Power: String
    }
)

const UserModel = mongoose.model("cars",UserSchema)

module.exports = UserModel;