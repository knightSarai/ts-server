import { Router, Request, Response, NextFunction } from 'express';

interface ServerRequest extends Request {
  body: { [key: string]: string | undefined };
}

function requireAuth(req: Request, res: Response, next: NextFunction) {
  if (req.session?.loggedIn) {
    next();
    return;
  }

  res.status(403).send('Forbidden!');
}

const router = Router();

router.get('/login', (req: ServerRequest, res: Response) => {
  if (req.session?.loggedIn) {
    res.status(403).send('Forbidden!');
    return;
  }
  res.send(`
          <div>
              <h1>Login</h1>
              <form method="POST">
                <div>
                    <label>Email</label>
                    <input type="email" name="email"/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password"/>
                </div>
                <button type="submit">Submit</button>
              </form>
          </div>
      `);
});

router.post('/login', (req: ServerRequest, res: Response) => {
  let { email, password } = req.body;
  if (email === 'knight.sarai.dev@gmail.com' && password === '1200') {
    req.session = { loggedIn: true };
    return res.redirect('/');
  }
  res.send('Invalid credesntails');
});

router.get('/logout', (req: ServerRequest, res: Response) => {
  if (req.session?.loggedIn) {
    req.session = undefined;
    return res.send(
      `
        <div>
            <h1>logged out successfully!</h1>
            <a href="/">Home Page</a>
        </div>
        `
    );
  }

  res.status(403).send('Forbidden!');
});

export { router, requireAuth };
