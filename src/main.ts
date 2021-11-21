import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { apiV1 } from './configs/api.configs';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.setGlobalPrefix(`${apiV1.api}/${apiV1.version}`);
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
