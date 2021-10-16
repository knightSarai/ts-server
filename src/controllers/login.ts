import { Request, Response } from 'express';
import { get, controller } from './decorators';

@controller('/auth')
class Login {
  @get('/login')
  getLogin(req: Request, res: Response) {
    console.log('knight');

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
}
