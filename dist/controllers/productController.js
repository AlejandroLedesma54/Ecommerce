"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.getProductByOrderId = exports.getAllProducts = exports.createProduct = void 0;
const product_1 = require("../models/product");
const createProduct = async (req, res) => {
    try {
        const { name, price, description, stock } = req.body;
        const product = await product_1.Product.create({ name, price, description, stock });
        res.status(201).json(product);
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
exports.createProduct = createProduct;
const getAllProducts = async (req, res) => {
    try {
        const products = await product_1.Product.findAll();
        res.json(products);
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
exports.getAllProducts = getAllProducts;
const getProductByOrderId = async (req, res) => {
    // Implement logic to get products by order ID
};
exports.getProductByOrderId = getProductByOrderId;
const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, price, description, stock } = req.body;
        const product = await product_1.Product.findByPk(id);
        if (product) {
            product.name = name;
            product.price = price;
            product.description = description;
            product.stock = stock;
            await product.save();
            res.json(product);
        }
        else {
            res.status(404).json({ error: 'Product not found' });
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
exports.updateProduct = updateProduct;
const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        await product_1.Product.destroy({ where: { id } });
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
exports.deleteProduct = deleteProduct;
