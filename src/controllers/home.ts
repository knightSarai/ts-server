import { Request, Response } from 'express';
import { get, controller } from './decorators';

@controller('')
class Main {
  @get('/')
  main(req: Request, res: Response) {
    if (req.session?.loggedIn) {
      return res.send(`
            <div>
                <h1>Welcome!</h1>
                <a href="/dashboard">Dashboard</a>
                <a href="auth/logout">logout</a>
            </div>
        `);
    }
    res.send(`
    <div>
        <h1>Home</h1>
        <a href="auth/login">login</a>
    </div>
  `);
  }
}
