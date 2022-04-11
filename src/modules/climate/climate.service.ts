import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ClimateService {
  constructor(private readonly httpService: HttpService) {}

  async getforecastSp() {
    const urlSP =
      'https://api.openweathermap.org/data/2.5/weather?q=Sao Paulo&lang=pt_br&appid=64bd2e1cf1df70bef49d5a9d4cffe5e4';
    const { status, data } = await this.httpService.get(urlSP).toPromise();
    if (status == 200) {
      return data;
    }
  }
  async getforecastPt() {
    const urlPt =
      'https://api.openweathermap.org/data/2.5/weather?q=Porto Alegre&lang=pt_br&appid=64bd2e1cf1df70bef49d5a9d4cffe5e4';
    const { status, data } = await this.httpService.get(urlPt).toPromise();
    if (status == 200) {
      return data;
    }
  }
  async getforecastCt() {
    const urlCt =
      'https://api.openweathermap.org/data/2.5/weather?q=Curitiba&lang=pt_br&appid=64bd2e1cf1df70bef49d5a9d4cffe5e4';
    const { status, data } = await this.httpService.get(urlCt).toPromise();
    if (status == 200) {
      return data;
    }
  }
}
