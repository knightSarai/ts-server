import { router, requireAuth } from './login';

router.get('/dashbord', requireAuth, (req, res) => {
  res.send(`
        <div>
            <h1>Dashboard</h1>
            <a href="/">Home Page</a>
        </div>
    `);
});
