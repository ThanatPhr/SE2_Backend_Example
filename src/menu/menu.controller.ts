import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { MenuService } from './menu.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateMenuDTO, UpdateMenuDTO } from './menu.dto';
import { Menu } from './menu.entity';

@Controller('menu')
@ApiTags('Menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Get()
  @ApiOperation({ description: 'Get all menus' })
  @ApiResponse({ status: 200, description: 'List of menus is sent' })
  async getAllMenu(): Promise<Menu[]> {
    return await this.menuService.getAllMenu();
  }

  @Get('/:id')
  @ApiOperation({ description: 'Get menu by id' })
  @ApiResponse({ status: 200, description: 'Menu is sent' })
  @ApiResponse({ status: 404, description: 'Menu not found' })
  async getMenuById(@Param('id') id: string): Promise<Menu> {
    return await this.menuService.getMenuById(id);
  }

  @Post()
  @ApiOperation({ description: 'Create user' })
  @ApiResponse({ status: 201, description: 'Menu is created' })
  async createMenu(@Body() dto: CreateMenuDTO): Promise<Menu> {
    return this.menuService.createMenu(dto);
  }

  @Put('/:id')
  @ApiOperation({ description: 'Update menu by id' })
  @ApiResponse({ status: 200, description: 'Menu is changed' })
  @ApiResponse({ status: 404, description: 'Menu not found' })
  async editUserProfile(
    @Param('id') id: string,
    @Body() dto: UpdateMenuDTO,
  ): Promise<Menu> {
    return await this.menuService.updateMenu(id, dto);
  }

  @Delete('/:id')
  @ApiOperation({ description: 'Delete menu by id' })
  @ApiResponse({ status: 200, description: 'Menu is deleted' })
  @ApiResponse({ status: 404, description: 'Menu not found' })
  async deleteUser(@Param('id') id: string): Promise<void> {
    return await this.menuService.removeMenuById(id);
  }
}
