import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { CatsController } from './cats/cats.controller';
import { logger } from './common/middleware/log.middleware';
import { HttpExceptionFilter } from './filter/http-exception.filter';

@Module({
  imports: [CatsModule],
  controllers: [AppController],
  providers: [AppService, {
    provide: 'APP_FILTER',
    useClass: HttpExceptionFilter
  }],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware, logger)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
      // .forRoutes(CatsController);
  }
}
