import express from 'express';
import { router, requireAuth } from './routes/login';
import cookieSession from 'cookie-session';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['qAsd__wer!23--0'] }));
// app.use(requireAuth);
app.use(router);

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
                <h1>Welcom!</h1>
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
