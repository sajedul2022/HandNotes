import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { log } from 'console';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class ExampleMiddleware implements NestMiddleware {
  // use(req: any, res: any, next: () => void) {
  //   log('Middleware Request...');
  //   next();
  // }

  use(req: Request, res: Response, next: NextFunction) {
    log('Middleware Request via Express Way...');
    log(req.headers.authorization);
    const { authorization } = req.headers;

    if(!authorization) throw new HttpException('No Authorization', HttpStatus.FORBIDDEN);
    if(authorization === 'dffghhhhjjjkkk') next();
    else throw new HttpException('Incorrect Authorized', HttpStatus.UNAUTHORIZED);
  }
}
