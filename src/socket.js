import io from "../server.js";
import { getTalk } from "./database/talksDb.js";

io.on("connection", (socket) => {
    console.log("A client has connected! ID: ", socket.id);

    socket.on("get_talk", async (arg, callback) => {
        const talk = await getTalk(arg);
        callback(talk);
    });
});