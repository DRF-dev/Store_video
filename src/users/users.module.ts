import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { UsersSchema } from '../model/users.schema'
import { UsersController } from './users.controller'
import { UsersServices } from './users.service'

@Module({
  imports: [MongooseModule.forFeature([{ name: "Users", schema: UsersSchema }])],
  providers: [UsersServices],
  controllers: [UsersController]
})
export class UsersModule { }