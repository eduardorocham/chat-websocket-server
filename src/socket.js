import io from "../server.js";
import { getTalk, addMessageToTalk } from "./database/talksDb.js";

io.on("connection", (socket) => {
    console.log("A client has connected! ID: ", socket.id);

    socket.on("get_talk", async (arg, callback) => {
        const talk = await getTalk(arg);
        callback(talk);
    });

    socket.on("send_message", async (messageObject, callback) => {
        const { talk_id, message } = messageObject;
        const updatedTalk = await addMessageToTalk(talk_id, message);
        callback(updatedTalk);
    });
});