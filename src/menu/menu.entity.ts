import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Menu {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column()
  name: string;

  @Column()
  price: number;

  @Column({ default: false })
  isInStock?: boolean;

  @Column()
  foodType: FoodType;
}

export enum FoodType {
  THAI = "thai",
  JAPAN = "japan",
  INTER = "inter"
}