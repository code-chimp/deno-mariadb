import { BaseModel, Field, FieldType, Model } from "../deps.ts";

@Model("bands")
export class Band extends BaseModel{
  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({
    type: FieldType.STRING,
    length: 50,
    notNull: true
  })
  name!: string;

  @Field({
    type: FieldType.STRING,
    length: 50,
    notNull: true
  })
  genre!: string;

  @Field({
    type: FieldType.STRING,
    length: 50,
    notNull: true
  })
  website!: string;
}
