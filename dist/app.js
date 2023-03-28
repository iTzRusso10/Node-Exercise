"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get("/planets", (req, res) => {
    res.json([{ name: "Giove" }, { name: "Saturno" }]);
});
exports.default = app;
//# sourceMappingURL=app.js.map