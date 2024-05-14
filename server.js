import "dotenv/config";
import http from "http";
import app from "./src/app.js";
import { Server } from "socket.io";
import "./src/dbConnect.js"

const PORT = process.env.PORT || 3000;

const httpServer = http.createServer(app);

const io = new Server(httpServer, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
    }
});

httpServer.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}!`);
});

export default io;