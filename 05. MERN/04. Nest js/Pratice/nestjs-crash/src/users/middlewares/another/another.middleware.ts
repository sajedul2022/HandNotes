import { Injectable, NestMiddleware } from '@nestjs/common';
import { log } from 'console';

@Injectable()
export class AnotherMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    log('Another Middleware Request...');
    next();
  }
}
