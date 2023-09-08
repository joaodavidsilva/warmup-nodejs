import { createServer } from "node:http";

const server = createServer(() => {
	console.log("Hello, server!");
});

server.listen(3333);
