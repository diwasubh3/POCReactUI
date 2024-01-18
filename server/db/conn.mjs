import { MongoClient } from "mongodb";
//require('dotenv').config();
const connectionString = process.env.DB_String || "";

console.log(process.env.DB_String)

const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
  console.log("Database connected successfully")
} catch(e) {
  console.error(e);
}

let db = conn.db("sample_training");

export default db;