import { Request, Response } from 'express';
import { get, controller, bodyValidator, post } from './decorators';

@controller('/auth')
class Auth {
  @get('/login')
  getLogin(req: Request, res: Response) {
    res.send(
      `
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
      `
    );
  }

  @post('/login')
  @bodyValidator('email')
  postLogin(req: Request, res: Response) {
    let { email, password } = req.body;
    if (email === 'knight.sarai.dev@gmail.com' && password === '1200') {
      req.session = { loggedIn: true };
      return res.redirect('/');
    }
    res.send('Invalid credentials');
  }
  @get('/logout')
  logout(req: Request, res: Response) {
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
  }
}
