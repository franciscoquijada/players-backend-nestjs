import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { apiV1 } from './configs/api.configs';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const whitelist = process.env.WHITE_LIST.split(',');
  app.enableCors({
    origin: function (origin, callback) {
      if (!origin || whitelist.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
  });
  app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true }));
  app.setGlobalPrefix(`${apiV1.api}/${apiV1.version}`);
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
