import express from 'express';

export class AppRouter {
  private static router: express.Router;

  static getRouter(): express.Router {
    if (!AppRouter.router) {
      AppRouter.router = express.Router();
    }
    return AppRouter.router;
  }
}

export default AppRouter;
