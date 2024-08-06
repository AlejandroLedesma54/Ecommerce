"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.generateToken = exports.authenticateUser = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_1 = require("../models/user");
const server_1 = require("../config/server");
const authenticateUser = async (email, password) => {
    const user = await user_1.User.findOne({ where: { email } });
    if (!user) {
        throw new Error('Invalid email or password');
    }
    const isMatch = await bcryptjs_1.default.compare(password, user.password);
    if (!isMatch) {
        throw new Error('Invalid email or password');
    }
    return (0, exports.generateToken)(user.id);
};
exports.authenticateUser = authenticateUser;
const generateToken = (userId) => {
    return jsonwebtoken_1.default.sign({ id: userId }, server_1.SECRET_KEY, { expiresIn: '1h' });
};
exports.generateToken = generateToken;
const verifyToken = (token) => {
    try {
        return jsonwebtoken_1.default.verify(token, server_1.SECRET_KEY);
    }
    catch (error) {
        throw new Error('Invalid token');
    }
};
exports.verifyToken = verifyToken;
