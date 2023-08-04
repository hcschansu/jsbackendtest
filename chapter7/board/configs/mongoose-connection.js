const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const uri =
  "mongodb+srv://tester:tester12@cluster0.gstqgln.mongodb.net/board?retryWrites=true&w=majority";

module.exports = function () {
  return mongoose.connect(uri, { useNewUrlParser: true });
};
