import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  getHello(): string {
    return "Hello World!!!";
  }

  getHello2(): string {
    return "<h1>Hello World!!</h1>";
  }
}
