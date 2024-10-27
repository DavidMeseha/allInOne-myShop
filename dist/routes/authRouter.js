"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_middleware_1 = require("../middlewares/auth.middleware");
const auth_controller_1 = require("../controllers/auth.controller");
const router = express_1.default.Router();
router.get("/check", auth_controller_1.checkToken);
router.get("/guest", auth_controller_1.guestToken);
router.post("/login", auth_middleware_1.apiAuthMiddleware, auth_controller_1.login);
router.post("/logout", auth_middleware_1.apiAuthMiddleware, auth_controller_1.logout);
router.post("/register", auth_middleware_1.apiAuthMiddleware, auth_controller_1.register);
exports.default = router;