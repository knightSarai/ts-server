import express from 'express';
import { router, requireAuth } from './routes/login';
import cookieSession from 'cookie-session';
import './controllers/login';
import AppRouter from './AppRouter';
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['qAsd__wer!23--0'] }));
app.use(router);
app.use(AppRouter.getRouter());

router.get('/dashboard', requireAuth, (req, res) => {
  res.send(`
            <div>
                <h1>Dashboard</h1>
                <a href="/">Home Page</a>
            </div>
        `);
});

router.get('/', (req, res) => {
  if (req.session?.loggedIn) {
    return res.send(`
            <div>
                <h1>Welcome!</h1>
                <a href="/dashboard">Dashboard</a>
                <a href="/logout">logout</a>
            </div>
        `);
  }
  res.send(`
    <div>
        <h1>Home</h1>
        <a href="/login">login</a>
    </div>
  `);
});

app.listen('1200', () => console.log('server on localhost:1200'));
