import { connectToDatabase } from "./dbConnect.js";
import { ObjectId } from "mongodb";

const db = await connectToDatabase();
const talksCollection = db.collection("talks");

export const getTalk = async (talkId) => {
    const id = new ObjectId(talkId);

    try {
        const talk = await talksCollection.findOne({ _id: id });
        return talk;
    } catch (error) {
        console.error("Error finding talk:", error);
    }
};

export const addMessageToTalk = async (talkId, message) => {
    const id = new ObjectId(talkId);

    try {
        const talk = await talksCollection.findOne({ _id: id });

        if (!talk) throw new Error("Talk not found");

        talk.messages.push(message);

        await talksCollection.updateOne({ _id: id }, { $set: { messages: talk.messages } });

        console.log("Message added with success!")
        return talk;
    } catch (error) {
        console.error("Error finding talk:", error);
    }
}