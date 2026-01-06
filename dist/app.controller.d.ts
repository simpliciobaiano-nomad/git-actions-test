import { AppService } from "./app.service";
import type { Request } from "express";
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    getHello2(request: Request): string;
}
