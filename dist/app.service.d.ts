export declare class AppService {
    private rides;
    createRide(from: string, to: string): {
        from: string;
        to: string;
        price: number;
    };
    getRides(): any[];
}
