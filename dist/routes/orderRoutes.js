"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cartController_1 = require("../controllers/cartController");
const router = (0, express_1.Router)();
router.post('/', cartController_1.addProductToCart);
router.delete('/:id', cartController_1.removeProductFromCart);
router.put('/:id', cartController_1.updateProductQuantityInCart);
exports.default = router;
