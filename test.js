require("dotenv").config()
const { MongoClient } = require("mongodb")

const client = new MongoClient(process.env.CONNECTIONSTRING)

async function test() {
  try {
    await client.connect()
    console.log("✅ MongoDB connection works")
  } catch (e) {
    console.error("❌ Mongo error:", e.message)
  } finally {
    process.exit()
  }
}

test()
