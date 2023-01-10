import { body } from "express-validator";
import { validate } from "../../utility/validate";

export const createUserValidator = [
    body('name').isString().notEmpty().withMessage('Name is required!'),
    body('role').isString().notEmpty().withMessage('Role is required!'),
    body('email').isEmail().withMessage('Email is required!'),
    validate
]

export const loginValidator = [
    body('username').isString().notEmpty().withMessage('Username is required!'),
    body('password').isString().notEmpty().withMessage('Password is required!'),
    validate
]