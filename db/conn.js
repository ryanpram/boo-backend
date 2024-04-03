const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");

module.exports.connect = async () => {
  const mongoServer = await MongoMemoryServer.create();
  const mongoUri = mongoServer.getUri();

  await mongoose.connect(mongoUri, { dbName: "booDB" });
  console.log(`MongoDB successfully connected to ${mongoUri}`);
};
