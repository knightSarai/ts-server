import 'reflect-metadata';

function routeMethod(method: string) {
  return function (path: string) {
    return function (target: any, key: string, desc: PropertyDescriptor) {
      Reflect.defineMetadata('path', path, target, key);
      Reflect.defineMetadata('method', method, target, key);
    };
  };
}

export const get = routeMethod('get');
export const post = routeMethod('post');
export const put = routeMethod('put');
export const del = routeMethod('delete');
export const patch = routeMethod('patch');
