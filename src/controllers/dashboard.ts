import { Request, Response, NextFunction } from 'express';
import { get, controller, use } from './decorators';

function requireAuth(req: Request, res: Response, next: NextFunction) {
  if (req.session?.loggedIn) {
    next();
    return;
  }
  res.status(403).send('Forbidden!');
}

@controller('/dashboard')
class Dashboard {
  @get('/')
  @use(requireAuth)
  dashboard(req: Request, res: Response) {
    res.send(`
            <div>
                <h1>Dashboard</h1>
                <a href="/">Home Page</a>
            </div>
        `);
  }
}
