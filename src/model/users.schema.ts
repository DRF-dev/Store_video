import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"

@Schema()
export class Users {
  @Prop({ type: String, required: true })
  name: string

  @Prop({ type: String, required: true })
  value: string
}

type UsersDocument = Users & Document
const UsersSchema = SchemaFactory.createForClass(Users)

export { UsersDocument, UsersSchema }
