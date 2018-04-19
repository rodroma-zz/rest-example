import Restify, { RequestHandler } from "restify";
import { allUsers } from "./user-resource";

const respond: RequestHandler = (req, res, next) => {
    res.send("Hi!");
    next();
};

const server = Restify.createServer();

server.get("/users", allUsers);
server.head("/users", allUsers);

server.listen(1337, "127.0.0.1", () => {
    console.log("%s listening in %s", server.name, server.url);
});