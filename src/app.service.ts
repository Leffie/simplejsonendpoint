import { Injectable } from '@nestjs/common';



@Injectable()
export class AppService {
  static globalVar: any;
  getHello(): string {
    return AppService.globalVar;
  }

  echoBody(b){
    AppService.globalVar =  b;
    return "All good";
  }
}
