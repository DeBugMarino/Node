import { createServer } from "node:http";

const server = createServer((request, response) => {
  console.log("startiamo il server");
  response.statusCode = 200;
  response.setHeader("content-type", "text/HTML");
  response.end("<html> <body> <h1> where is the message</h1> </body> </html>");
});

server.listen(3000, () => {
  console.log(`server running at http://localhost:3000`);
});
