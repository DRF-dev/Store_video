import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"

@Schema({ timestamps: true })
export class Users {
  @Prop({ type: String, required: true })
  name: string

  @Prop({ type: String, required: true })
  value: string

  @Prop()
  videoName: String

  @Prop()
  video: String
}

const UsersSchema = SchemaFactory.createForClass(Users)

export { UsersSchema }

