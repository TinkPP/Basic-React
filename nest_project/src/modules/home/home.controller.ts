import { Controller, Get } from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { HomeService } from './home.service';

@Controller('/home')
export class HomeController {
  constructor(private HomeService: HomeService) {}

  @Get('/getMap')
  getMap() {
    return this.HomeService.getMap();
  }

  @Get('/getInnerPay')
  getInnerPay() {
    return this.HomeService.getInnerPay();
  }

  @Get('/getDep')
  async getDep() {
    return await this.HomeService.getDep();
  }

  @Get('/getTop')
  async getTop() {
    return await this.HomeService.getTop();
  }

  @Get('/getChnlDep')
  async getChnlDep() {
    return await this.HomeService.getChnlDep();
  }

  @Get('/getZoneDep')
  async getZoneDep() {
    return await this.HomeService.getZoneDep();
  }

  @Get('/getEveryMonth')
  async getEveryMonth() {
    return await this.HomeService.getEveryMonth();
  }
}
