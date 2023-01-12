import { FoodType } from "./menu.entity"

export class CreateMenuDTO {
  name: string
  price: number
  isInStock?: boolean
  foodType: FoodType
}

export class UpdateMenuDTO {
  name?: string
  price?: number
  isInStock?: boolean
  foodType?: FoodType
}
