const env = process.env.NODE_ENV || "production";
const mongoose = require('mongoose');
const config = {
    development: {
        APIKey: "",
        APISecret: "",
    },
    production: {
        APIKey: "L_STgEwIS1GYguIvvS7l9g",
        APISecret: "tPwMoA4uGCMJKyH3OHwdzbR9IKvsMMtvJKNo",
    }
}
mongoose.connect("mongodb+srv://wasim:wasim12@cluster0.2pj1dlr.mongodb.net/testl");
// mongoose.connect("mongodb+srv://wassem0522:waseem0522@cluster0.ypipcou.mongodb.net/test")
module.exports = config[env];