import express from 'express';
import router from './router/index';

const app = express();
app.use('/', router);

export default app;
