import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  timestamps: true // Esto añade automáticamente `createdAt` y `updatedAt`
})
export class User extends Document {
  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  passwordHash: string;
}

export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);