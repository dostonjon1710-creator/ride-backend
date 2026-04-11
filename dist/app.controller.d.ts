import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    createRide(body: any): any;
    getAllRides(): any[];
}
