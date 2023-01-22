import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Menu } from './menu.entity';
import { Repository } from 'typeorm';
import { CreateMenuDTO, UpdateMenuDTO } from './menu.dto';

@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(Menu)
    private menuRepository: Repository<Menu>,
  ) {}

  getAllMenu(): Promise<Menu[]> {
    return this.menuRepository.find();
  }

  async getMenuById(id: string): Promise<Menu> {
    const menu = await this.menuRepository.findOneBy({ id });
    if (!menu) {
      throw new HttpException('Menu not found', 404);
    }
    return menu;
  }

  async createMenu(dto: CreateMenuDTO): Promise<Menu> {
    const menu = this.menuRepository.create(dto);
    await this.menuRepository.save(menu);
    return menu;
  }

  async updateMenu(id: string, dto: UpdateMenuDTO): Promise<Menu> {
    const menu = await this.menuRepository.findOneBy({ id });
    if (!menu) {
      throw new HttpException('Menu not found', 404);
    }
    const updatedMenu = await this.menuRepository.update(id, dto);
    return updatedMenu.raw;
  }

  async removeMenuById(id: string): Promise<void> {
    const deletedMenu = await this.menuRepository.delete(id);
    if (!deletedMenu.affected) {
      throw new HttpException('Menu not found', 404);
    }
  }
}
