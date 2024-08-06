"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProductQuantityInCart = exports.removeProductFromCart = exports.addProductToCart = void 0;
const productcart_1 = require("../models/productcart");
const addProductToCart = async (req, res) => {
    try {
        const { cartId, productId, quantity } = req.body;
        const productCart = await productcart_1.ProductCart.create({ cartId, productId, quantity });
        res.status(201).json(productCart);
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
exports.addProductToCart = addProductToCart;
const removeProductFromCart = async (req, res) => {
    try {
        const { id } = req.params;
        await productcart_1.ProductCart.destroy({ where: { id } });
        res.status(204).send();
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
exports.removeProductFromCart = removeProductFromCart;
const updateProductQuantityInCart = async (req, res) => {
    try {
        const { id } = req.params;
        const { quantity } = req.body;
        const productCart = await productcart_1.ProductCart.findByPk(id);
        if (productCart) {
            productCart.quantity = quantity;
            await productCart.save();
            res.json(productCart);
        }
        else {
            res.status(404).json({ error: 'Product in cart not found' });
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
exports.updateProductQuantityInCart = updateProductQuantityInCart;
