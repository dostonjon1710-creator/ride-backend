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
  createRide(@Body() body: any): string {
    const { from, to } = body;
    return `Ride ordered from ${from} to ${to} 🚗`;
  }
}