import 'reflect-metadata';
import { RequestHandler } from 'express';
import { Methods } from './Methods';
import { MetadataKeys } from './MetadataKeys';

interface RequestHandlerDescriptor extends PropertyDescriptor {
  value?: RequestHandler;
}

function routeMethod(method: string) {
  return function (path: string) {
    return function (target: any, key: string, desc: RequestHandlerDescriptor) {
      Reflect.defineMetadata(MetadataKeys.Path, path, target, key);
      Reflect.defineMetadata(MetadataKeys.Method, method, target, key);
    };
  };
}

export const get = routeMethod(Methods.Get);
export const post = routeMethod(Methods.Post);
export const put = routeMethod(Methods.Put);
export const del = routeMethod(Methods.Del);
export const patch = routeMethod(Methods.Patch);
