"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrder = void 0;
const order_1 = require("../models/order");
const createOrder = async (req, res) => {
    try {
        const user = req.user; // Convierte a any para acceder a user
        const userId = user.id;
        const { products, total } = req.body;
        const order = await order_1.Order.create({
            userId,
            total,
            // Aquí va la lógica adicional para guardar los productos
        });
        res.status(201).json(order);
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
exports.createOrder = createOrder;
