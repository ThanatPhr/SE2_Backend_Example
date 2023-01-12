import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Menu } from 'src/menu/menu.entity';

export const typeORMConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5434,
    username: 'postgres',
    password: 'postgres',
    database: 'menu',
    entities: [Menu],
    synchronize: true,
}