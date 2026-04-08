import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'DOSTON BACKEND WORKS 🚀';
  }

 @Post()
createRide(@Body() body: any): any {
  const { from, to } = body;

  return {
    status: 'ok',
    from,
    to,
    price: Math.floor(Math.random() * 50) + 10,
  };
}