import { login, putProfileImageCallback } from './controller';
import uploadImage from '../../middleware/s3';
import express from 'express';

const router = express.Router();

router.get('/login', login);
router.post('/upload', (req, res, next) => {
  console.log('upload request')
  console.log(req.file);
  console.log(req.accepted);
  console.log(req.headers);
  console.log(req.body);
  next();
}, uploadImage.single('imgFile'), putProfileImageCallback);

export default router;
