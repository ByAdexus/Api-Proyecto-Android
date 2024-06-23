import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    readonly username?: string;
  readonly email?: string;
  readonly passwordHash?: string;
  readonly createdAt?: Date;
  readonly updatedAt?: Date;
}
