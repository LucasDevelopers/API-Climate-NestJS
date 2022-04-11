import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClimateController } from './modules/climate/climate.controller';
import { ClimateService } from './modules/climate/climate.service';
import { ClimateModule } from './modules/climate/climate.module';

@Module({
  imports: [HttpModule, ClimateModule],
  controllers: [AppController, ClimateController],
  providers: [AppService, ClimateService],
})
export class AppModule {}
