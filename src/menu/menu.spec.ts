import { Test, TestingModule } from '@nestjs/testing';
import { MenuService } from './menu.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Menu } from './menu.entity';

describe('Test Menu Service', () => {
  let service: MenuService;
  const mockedRepo = {
    find: jest.fn(() => Promise.resolve([])),
  };
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MenuService,
        {
          provide: getRepositoryToken(Menu),
          useValue: mockedRepo,
        },
      ],
    }).compile();
    service = await module.get(MenuService);
  });

  afterEach(() => jest.clearAllMocks());

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('Test Business Logic', () => {
    it('should return array', async () => {
      const findSpy = jest.spyOn(mockedRepo, 'find');
      const menu = await service.getAllMenu();
      expect(menu).toEqual([]);
      expect(findSpy).toHaveBeenCalledTimes(1);
      expect(findSpy).toHaveBeenCalledWith();
    });
  });
});
