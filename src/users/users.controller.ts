import { Controller, Get, Post, Res, UploadedFile, UseInterceptors } from "@nestjs/common"
import { FileInterceptor } from "@nestjs/platform-express"
import { Response } from 'express'
import { writeFileSync } from "fs"
import { join } from "path"
import { UsersServices } from './users.service'

@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersServices) { }

  @Post("/upload")
  @UseInterceptors(FileInterceptor('userPhoto'))
  async uploadFile(@UploadedFile() file, @Res() res: Response) {
    await this.usersService.saveUser(file.buffer, file.originalname)
    return res.status(200).json({ file: file.buffer })
  }

  @Get("/")
  async getUsers(@Res() res: Response) {
    const a = await this.usersService.getAllUsers()
    writeFileSync(join(__dirname, `../../${a[0].videoName}`), Buffer.from(JSON.parse(a[0].video)))
    return res.status(200).json(a)
  }
}