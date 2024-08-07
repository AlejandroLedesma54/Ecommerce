"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const router = (0, express_1.Router)();
router.get('/', userController_1.getAllUsers);
router.delete('/:id', userController_1.deleteUser);
router.put('/:id', userController_1.updateUser);
exports.default = router;
