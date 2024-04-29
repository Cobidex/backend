import { Router } from "express";
import { CreateAppointment } from "../Controllers/appointments";

const router = Router();

router.post('/', CreateAppointment);

export default router;