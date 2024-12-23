import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';
import { log } from 'console';

@Injectable()
export class ValidateCreateUserPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    log('value from Pipe', value);
    log('metadata from Pipe', metadata);

    const parseAgeToInt = parseInt(value.age);
    if (isNaN(parseAgeToInt)) {
      log(`${value.age} is not a number`);
      throw new HttpException('Age must be a number', HttpStatus.BAD_REQUEST);
    }

    log(`Awesome! ${value.age} is a number`);
    return {...value, age: parseAgeToInt};
  }
}
