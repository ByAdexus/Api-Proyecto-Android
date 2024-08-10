// src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as passport from 'passport';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(passport.initialize());
  // No necesitas `passport.session()` porque estás usando JWT

  await app.listen(3000);
}

bootstrap();
