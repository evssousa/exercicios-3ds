import http from "http";
import dotenv from "dotenv";

dotenv.config();


const PORT = process.env.PORT || 3000;


const nome = "Gustavo";
const idade = 18;


const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
  res.end(`Servidor rodando para ${nome}, idade ${idade}!`);
});


server.listen(PORT, () => {
  console.log(`Servidor funcionando em http://localhost:${PORT}`);
});

server.close(() => {
  console.log("Servidor encerrado.");
});

export default server;
