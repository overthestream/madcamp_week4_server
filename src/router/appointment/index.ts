import { makeAppointment, attendAppointment } from './controller';
import express from 'express';

const router = express.Router();

router.post('/make', makeAppointment);
router.post('/attend', attendAppointment);

export default router;
