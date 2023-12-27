import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Test } from 'src/entities/test.entity';
import { Repository } from 'typeorm';

@Injectable()
export class Testservice {
  constructor(
    @InjectRepository(Test)
    private testmentRepository: Repository<Test>,
  ) {}

  async get(): Promise<any> {
    const data = await this.testmentRepository.find();
    console.log('mmmmmm', data);
    return [1, 2, 3, 4];
  }
}
