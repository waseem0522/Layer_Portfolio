const mongoose = require("mongoose");
const Schema = mongoose.Schema;


let MeetingSchema = new Schema({
    f_name: {
        type: String
    },
    cnic: {
        type: Number
    },
    address: {
        type: String
    },
    time_from: {
        type: Date
    },
    time_to: {
        type: Date
    }
});

const model = mongoose.model("meetingSchemas", MeetingSchema);

module.exports = model;