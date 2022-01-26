import { Injectable } from '@nestjs/common';



@Injectable()
export class AppService {
  static varOne: any;
  static varTwo: any;
  getOne(): string {
    return AppService.varOne;
  }

  postOne(b){
    AppService.varOne =  b;
    return 'all  Good';
  }

  getTwo(): string {
    return AppService.varTwo;
  }

  postTwo(b){
    AppService.varTwo =  b;
    return 'all  Good';
  }
}
