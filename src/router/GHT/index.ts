import {
  getGHTList,
  getUserGHTList,
  writeGHT,
  writeReply,
  getReplyList,
} from './controller';
import express from 'express';
import uploadImage from '../../middleware/s3';

const router = express.Router();

router.get('/list', getGHTList);
router.get('/written', getUserGHTList);
router.post('/write', uploadImage.single('imgFile'), writeGHT);
router.post('/reply', writeReply);
router.get('/reply/list', getReplyList);

export default router;
