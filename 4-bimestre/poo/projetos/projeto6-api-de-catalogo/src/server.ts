import express from "express";
import helmet from "helmet";
import router from "./routes";
import path from "path";
import "dotenv/config";
import { Server } from "http";

const app = express();

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../public")));

app.use("/", router);

const PORT = process.env.PORT || 3000;

const server: Server = app.listen(PORT, () => {
   if (process.env.NODE_ENV !== "test") {
   console.log(`Servidor rodando em http://localhost:${PORT}/`);
}
});

(server as any).listen = () => ({
    close: server.close.bind(server),
});

export default server as any;