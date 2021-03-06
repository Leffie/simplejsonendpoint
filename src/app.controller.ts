import { Body, Controller, Get, HttpCode, Post, Response } from '@nestjs/common';
import { response } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('getone')
  getHello(): string {
    return this.appService.getOne();
  }

  @Post('postone')
  @HttpCode(201)
  receiveJson(@Body() b ){
    return {
      "statusCode": 201,
      "message": this.appService.postOne(b)
    }
  }

  @Get('gettwo')
  getTwo(): string {
    return this.appService.getTwo();
  }
    @Post('posttwo')
  @HttpCode(201)
  PostTwo(@Body() b ){
    return {
      "statusCode": 201,
      "message": this.appService.postTwo(b)
    };
  }trice
}
