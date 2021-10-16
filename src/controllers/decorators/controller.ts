import { AppRouter } from '../../AppRouter';
import 'reflect-metadata';

export const router = AppRouter.getRouter();

export function controller(pathPrefix: string) {
  return function (target: Function) {
    for (let key in target.prototype) {
      const routeHandler = target.prototype[key];
      const path = Reflect.getMetadata('path', target.prototype, key);

      if (path) {
        router.get(`${pathPrefix}${path}`, routeHandler);
      }
    }
  };
}
