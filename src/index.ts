import express from 'express';
import cookieSession from 'cookie-session';
import './controllers/auth';
import './controllers/home';
import './controllers/dashboard';
import AppRouter from './AppRouter';
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['qAsd__wer!23--0'] }));
app.use(AppRouter.getRouter());

app.listen('1200', () => console.log('server on localhost:1200'));
