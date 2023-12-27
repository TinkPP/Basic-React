import { Controller, Get } from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Testservice } from './test.service';

@Controller('/test')
export class TestController {
  constructor(private Testservice: Testservice) {}

  @Get('/get')
  async get() {
    return await this.Testservice.get();
  }
}
