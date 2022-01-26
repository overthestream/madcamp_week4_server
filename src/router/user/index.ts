import {
  login,
  putProfileImageCallback,
  putUserText,
  putUserLoc,
  getUserList
} from './controller';
import uploadImage from '../../middleware/s3';
import express from 'express';

const router = express.Router();

router.get('/login', login);
router.get('/list', getUserList);
router.post('/upload', uploadImage.single('imgFile'), putProfileImageCallback);
router.put('/text', putUserText);
router.put('/location', putUserLoc);

export default router;
