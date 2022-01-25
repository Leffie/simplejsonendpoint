import { Body, Controller, Get, HttpCode, Post, Response } from '@nestjs/common';
import { response } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('post')
  @HttpCode(201)
  receiveJson(@Body() b ){
    return {
      "statusCode": 201,
      "message": this.appService.echoBody(b)
    };
  }
}
