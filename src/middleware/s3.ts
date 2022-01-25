import { S3 } from 'aws-sdk';
import { Request } from 'express';
import multerS3 from 'multer-s3';
import multer from 'multer';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();
const s3 = new S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region: process.env.AWS_REGION,
});

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'madcamp4',
    key: (req: Request, file, cb) => {
      console.log('hi');
      console.log(file);
      const ext = path.extname(file.originalname);
      if (!['.png', '.jpg', '.jpeg', '.gif', '.bmp'].includes(ext)) {
        return cb(new Error('Only images are allowed'));
      }
      cb(null, new Date().toString() + ext);
    },
    acl: 'public-read-write',
  }),
});

export default upload;
