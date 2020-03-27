import {DefaultCrudRepository} from '@loopback/repository';
import {Fingers, FingersRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class FingersRepository extends DefaultCrudRepository<
  Fingers,
  typeof Fingers.prototype.id,
  FingersRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Fingers, dataSource);
  }
}
