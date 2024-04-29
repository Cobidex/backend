"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = require("./routes");
const app = (0, express_1.default)();
dotenv_1.default.config();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
const PORT = process.env.PORT;
app.use('/api/diagnosis', routes_1.diagnosisRoute);
app.use('api/users', routes_1.userRoutes);
app.use('/api/patients', routes_1.patientRoute);
app.use('api/appointments', routes_1.appointmentRoutes);
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});
app.use((err, req, res, next) => {
    if (err.message) {
        res.status(500).json({ error: err.message });
    }
});
