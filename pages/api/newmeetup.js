import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://parthgera25:hstRTud0n0pzSzSW@cluster0.caehmlo.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();
    const meetupcollection = db.collection("meetups");
    const result = await meetupcollection.insertOne(data);
    console.log(result);
    client.close();
    res.status(201).json({ message: "data recived" });
  }
}

export default handler;
