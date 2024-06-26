import { Module, forwardRef } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module'; // Ajusta la ruta según sea necesario
import { jwtConstants } from './constants';

@Module({
  imports: [
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
    forwardRef(() => UsersModule), // Usa forwardRef para manejar dependencias circulares
    PassportModule.register({ session: true }),
  ],
  providers: [AuthService, LocalStrategy],
  controllers: [AuthController],
  exports: [AuthService], // Exporta AuthService si es necesario usarlo fuera de este módulo
})
export class AuthModule {}
