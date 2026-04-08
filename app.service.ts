import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private rides: any[] = [];

  createRide(from: string, to: string) {
    const ride = {
      from,
      to,
      price: Math.floor(Math.random() * 50) + 10,
    };

    this.rides.push(ride);

    return ride;
  }

  getRides() {
    return this.rides;
  }
}