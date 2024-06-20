export class CreateUserDto {
    username: string;
    email: string;
    passwordHash: string;
    createdAt: Date;
    updatedAt: Date;
  }