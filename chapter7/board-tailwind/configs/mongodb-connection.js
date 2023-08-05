const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://tester:tester12@cluster0.gstqgln.mongodb.net/board";
// const uri = "mongodb://localhost:27017";

module.exports = function (callback) {
  return MongoClient.connect(uri, callback);
};
