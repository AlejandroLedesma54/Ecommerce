"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken")); // Importa la librería jsonwebtoken para manejar tokens JWT.
const authMiddleware = (req, res, next) => {
    const token = req.header("Authorization")?.replace("Bearer ", ""); // Obtiene el token de la cabecera de autorización y elimina el prefijo "Bearer ".
    if (!token) {
        return res.status(401).json({ message: "No token provided" }); // Devuelve una respuesta 401 si no se proporciona un token.
    }
    try {
        const decoded = jsonwebtoken_1.default.verify(token, "secret_key"); // Verifica el token usando la clave secreta. Ajusta "secret_key" a tu clave secreta real.
        req.user = decoded; // Almacea la información decodificada del token en req.user.
        next(); // Llama a la siguiente función middleware.n
    }
    catch (error) {
        res.status(401).json({ message: "Invalid token" }); // Devuelve una respuesta 401 si el token es inválido.
    }
};
exports.default = authMiddleware; // Exporta el middleware de autenticación.
