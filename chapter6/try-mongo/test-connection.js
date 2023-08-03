
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://tester:tester12@cluster0.gstqgln.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri);

// client.connect(err =>{
//   const collection = client.db("test").command("devices");
//   client.close();
// });

async function run() {
  await client.connect();
  const adminDB = client.db("test").admin();
  const listDatabases = await adminDB.listDatabases();

  console.log(listDatabases);
  return "OK";
}

run()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

