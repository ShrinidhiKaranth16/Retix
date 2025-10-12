import { ValidationError } from "express-validator";
import { CustomError } from "./custom-error.js";
export class RequestValidationError extends CustomError {
    statusCode = 400;
    constructor(public errors: ValidationError[]) {
        super("Invalid request parameters");
        Object.setPrototypeOf(this, new.target.prototype);
    }
    serializeErrors() {
        return this.errors.map(error => {
            if (error.type === "field") {
                return { message: error.msg, field: error.path };
            }
            return { message: error.msg, field: undefined };
        });
    }
}