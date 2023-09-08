import { fastify } from "fastify";
import { DatabaseMemory } from "./database-memory.js";

const server = fastify();
const database = new DatabaseMemory();

server.get("/videos", () => {
	const videos = database.list();

	return videos;
});

server.post("/videos", (request, reply) => {
	const { title, description, duration } = request.body;

	database.create({
		title,
		description,
		duration
	});

	console.log(database.list());

	return reply.status(201).send();
});

server.put("/videos/:id", (request, reply) => {
	return "PUT videos:id";
});

server.delete("/videos/:id", (request, reply) => {
	return "DELETE videos:id";
});

server.listen({
	port: 3333
});
