import { Module, forwardRef } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User, UserSchema } from './schemas/user.schema';
import { AuthModule } from '../auth/auth.module'; // Ajusta la ruta según sea necesario
import { JwtModule } from '@nestjs/jwt'; // Importa JwtModule
import { AuthService } from '../auth/auth.service'; // Importa AuthService
import { jwtConstants } from 'src/auth/constants';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    forwardRef(() => AuthModule), // Usa forwardRef para manejar dependencias circulares
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [UsersController],
  providers: [UsersService, AuthService], // Incluye AuthService en los providers
  exports: [UsersService], // Exporta UsersService si es necesario
})
export class UsersModule {}
