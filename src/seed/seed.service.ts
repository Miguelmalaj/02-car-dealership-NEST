import { CarsService } from './../cars/cars.service';
import { Injectable } from '@nestjs/common';
import { CreateSeedDto } from './dto/create-seed.dto';
import { UpdateSeedDto } from './dto/update-seed.dto';
import { CARS_SEED } from './data/cars.seed';
import { BRANDS_SEED } from './data/brands.seed';
import { BrandsService } from '../brands/brands.service';

@Injectable()
export class SeedService {
 
  constructor(
    private readonly carsService: CarsService,
    private readonly brandsService: BrandsService
  ){}

  populateDB() {

    this.carsService.fillCarsWithSeedData( CARS_SEED )
    this.brandsService.fillCarsWithSeedData( BRANDS_SEED )
    // CARS_SEED
    // BRANDS_SEED

    return 'Endpoint executed'

  }

}
