import { Controller, Post, Res } from "@nestjs/common"
import { Response } from 'express'
import { UsersServices } from './users.service'

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersServices) { }

  @Post("/")
  async createUser(@Res() res: Response) {
    await this.usersService.helloWorld()
    return res.status(200).json({ mess: "Success" })
  }
}