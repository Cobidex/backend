"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const appointments_1 = require("../Controllers/appointments");
const router = (0, express_1.Router)();
router.post('/', appointments_1.CreateAppointment);
exports.default = router;
