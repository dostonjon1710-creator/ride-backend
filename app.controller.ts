import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'DOSTON BACKEND WORKS 🚀';
  }

  @Post('rides')
createRide(@Body() body: any): any {
  const { from, to } = body;
  return this.appService.createRide(from, to);
}

  @Get('rides')
  getAllRides() {
    return this.appService.getRides();
  }
}