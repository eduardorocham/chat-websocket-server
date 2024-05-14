import { talksCollection } from "./dbConnect.js";
import { ObjectId } from "mongodb";

export const getTalk = async (talkId) => {
    const id = new ObjectId(talkId);

    try {
        const talk = await talksCollection.findOne({ _id: id });
        return talk;
    } catch (error) {
        console.error("Error finding talk:", error);
    }
};