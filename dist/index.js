"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const server_1 = __importDefault(require("./config/server"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const productRoutes_1 = __importDefault(require("./routes/productRoutes"));
const cartRoutes_1 = __importDefault(require("./routes/cartRoutes"));
const orderRoutes_1 = __importDefault(require("./routes/orderRoutes"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(express_1.default.json());
const corsOptions = {
    origin: "*", // Reemplaza con el origen que deseas permitir
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    optionsSuccessStatus: 204,
};
app.use((0, cors_1.default)(corsOptions));
app.use('/auth', authRoutes_1.default);
app.use('/users', userRoutes_1.default);
app.use('/products', productRoutes_1.default);
app.use('/carts', cartRoutes_1.default);
app.use('/orders', orderRoutes_1.default);
server_1.default.sync().then(() => {
    app.listen(port, () => {
        console.log(`Server running on port http://localhost:${port}`);
    });
});
