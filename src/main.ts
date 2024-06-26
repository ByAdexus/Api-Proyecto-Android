import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(session({
    secret: 'your_secret_key_heregggggggggggggg', // Cambia esto por una clave secreta más segura
    resave: false,
    saveUninitialized: false,
  }));
  app.use(passport.initialize());
  app.use(passport.session());

  await app.listen(3000);
  
}
bootstrap();

