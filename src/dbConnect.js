import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.DB_CONNECTION);

let talksCollection;

try {
    await client.connect();

    const db = client.db("chat");
    talksCollection = db.collection("talks");

    console.log("Connection with database made with sucess!")
} catch (error) {
    console.log(error);
}

export { talksCollection }