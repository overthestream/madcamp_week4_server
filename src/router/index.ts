import express from 'express';
import userRouter from './user/index';
import visitRouter from './visit/index';
import GHTRouter from './GHT/index';

const router = express.Router();

router.use('/user', userRouter);
router.use('/visit', visitRouter);
router.use('/GHT', GHTRouter);

export default router;
