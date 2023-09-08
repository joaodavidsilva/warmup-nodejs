// import { createServer } from "node:http";

// const server = createServer((request, response) => {
// 	response.write("Hello, World!");

// 	response.end();
// });

// server.listen(3333);

import { fastify } from "fastify";

const server = fastify();

server.get("/videos", (request, response) => {
	return "GET videos";
});

server.post("/videos", (request, response) => {
	return "POST videos";
});

server.put("/videos/:id", (request, response) => {
	return "PUT videos:id";
});

server.delete("/videos/:id", (request, response) => {
	return "DELETE videos:id";
});

server.listen({
	port: 3333
});
