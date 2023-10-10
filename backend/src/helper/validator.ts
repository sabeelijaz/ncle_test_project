import { Request, Response, NextFunction } from "express";
import Ajv from "ajv";
import AddFormat from "ajv-formats";

class SchemaValidator {
    private ajv = new Ajv();


    validateBody(schema: object) {

        AddFormat(this.ajv, ["date", "time", "date-time"]);
        // AddKeyword(this.ajv, ["transform"]);

        const validate = this.ajv.compile(schema);
        return (req: Request, res: Response, next: NextFunction) => {
            if (!validate(req.body)) return res.status(400).json(validate.errors);
            return next();
        };
    }
}

export default SchemaValidator;