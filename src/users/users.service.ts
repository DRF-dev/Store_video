import { Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/mongoose"
import { Model } from "mongoose"
import { Users } from '../model/users.schema'

@Injectable()
export class UsersServices {
  constructor(
    @InjectModel("Users")
    private readonly usersModel: Model<any>
  ) { }

  public saveUser(bufferFile: Buffer, originalBufferName: string): Promise<Users> {
    const bufferInString = JSON.stringify(bufferFile)
    const newUser = new this.usersModel({
      name: "hello",
      value: "world",
      videoName: originalBufferName,
      video: bufferInString
    })
    return newUser.save()
  }

  public async getAllUsers() {
    return this.usersModel.find()
  }
}