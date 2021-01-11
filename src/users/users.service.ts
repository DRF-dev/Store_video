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

  public helloWorld(): Promise<Users> {
    const newUser = new this.usersModel({
      name: "hello 2",
      value: "world 2"
    })
    return newUser.save()
  }
}