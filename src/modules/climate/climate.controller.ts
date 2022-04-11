import { Controller, Get } from '@nestjs/common';
import { ClimateService } from './climate.service';

@Controller('climate')
export class ClimateController {
  constructor(private readonly climateService: ClimateService) {}

  @Get('SaoPaulo')
  async saoPaulo() {
    return await this.climateService.getforecastSp();
  }
  @Get('PortoAlegre')
  async portoAlegre() {
    return await this.climateService.getforecastPt();
  }
  @Get('Curitiba')
  async Curitiba() {
    return await this.climateService.getforecastCt();
  }
}
