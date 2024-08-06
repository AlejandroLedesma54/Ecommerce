"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_1 = require("../models/user");
const register = async (req, res) => {
    try {
        const { email, password, roleId } = req.body;
        const hashedPassword = await bcryptjs_1.default.hash(password, 10);
        const user = await user_1.User.create({ email, password: hashedPassword, roleId });
        res.status(201).json(user);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }
        else {
            res.status(500).json({ error: 'Unknown error' });
        }
    }
};
exports.register = register;
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await user_1.User.findOne({ where: { email } });
        if (user && (await bcryptjs_1.default.compare(password, user.password))) {
            const token = jsonwebtoken_1.default.sign({ id: user.id, roleId: user.roleId }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.json({ token });
        }
        else {
            res.status(401).json({ error: 'Invalid email or password' });
        }
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }
        else {
            res.status(500).json({ error: 'Unknown error' });
        }
    }
};
exports.login = login;
