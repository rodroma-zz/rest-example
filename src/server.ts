import Restify, { Next, Response } from "restify";

const respond: any = (req: Request, res: Response, next: Next) => {
    res.send("Hi!");
    next();
};

const server = Restify.createServer();

server.get("/hello", respond);
server.head("/hello", respond);

server.listen(1337, "127.0.0.1", () => {
    console.log("%s listening in %s", server.name, server.url);
});