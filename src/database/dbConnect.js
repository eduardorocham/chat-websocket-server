import { MongoClient } from "mongodb";

let db;

const connectToDatabase = async () => {
    try {
        const client = new MongoClient(process.env.DB_CONNECTION);
        await client.connect();
        console.log("Connection with database made with sucess!")
    
        db = client.db("chat");
        return db;
        // talksCollection = db.collection("talks");
        
    } catch (error) {
        console.log(error);
    }
}

export { connectToDatabase }
