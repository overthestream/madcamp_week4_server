import { getVisitList, addVisitItem } from './controller';
import express from 'express';

const router = express.Router();

router.get('/list', getVisitList);
router.post('/add', addVisitItem);

export default router;
