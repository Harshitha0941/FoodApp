import { Test, TestingModule } from '@nestjs/testing';
import { RestuarentController } from './restuarent.controller';

describe('RestuarentController', () => {
  let controller: RestuarentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RestuarentController],
    }).compile();

    controller = module.get<RestuarentController>(RestuarentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
