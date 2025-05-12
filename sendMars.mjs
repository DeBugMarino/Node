import { createServer } from "node:http";

const server = createServer((request, response) => {
  console.log("startiamo il server");
  response.statusCode = 200;
  response.setHeader("content-type", "text/JSON");

  const jsonSend = JSON.stringify({ location: "Mars" });

  response.end(jsonSend);
});

server.listen(3000, () => {
  console.log(`server running at http://localhost:3000`);
});
