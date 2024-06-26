import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(session({
    secret: 'your_secret_key_heregggggggggggggg', // Cambia esto por una clave secreta más segura
    resave: false,
    saveUninitialized: false,
  }));

  await app.listen(3000);
}
bootstrap();
