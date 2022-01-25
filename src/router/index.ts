import express from 'express';
import userRouter from './user/index';
import visitRouter from './visit/index';

const router = express.Router();

router.use('/user', userRouter);
router.use('/visit', visitRouter);

export default router;
