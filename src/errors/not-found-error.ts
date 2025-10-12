import { CustomError } from "./custom-error.js";

export class NotFoundError extends CustomError{
    statusCode = 404;
    constructor(){
        super("Not Found");
        Object.setPrototypeOf(this, new.target.prototype);
    }
    serializeErrors(){
        return [{ message: "Not Found" }];
    }
}