import { RequestHandler } from "restify";

class User {
    public readonly firstName: string;
    public readonly lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const users: User[] = [
    { firstName: "Maximiliano", lastName: "Meza" },
    new User("Martín", "Benitez")
];

export const allUsers: RequestHandler = (req, res, next) => {
    res.send(users);
    next();
};
