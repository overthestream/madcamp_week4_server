import express from 'express';
import userRouter from './user/index';
import visitRouter from './visit/index';
import GHTRouter from './GHT/index';
import appointmentRouter from './appointment/index';

const router = express.Router();

router.use('/user', userRouter);
router.use('/visit', visitRouter);
router.use('/GHT', GHTRouter);
router.use('/appointment', appointmentRouter);

export default router;
