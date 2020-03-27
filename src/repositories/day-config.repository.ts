import {DefaultCrudRepository} from '@loopback/repository';
import {DayConfig, DayConfigRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class DayConfigRepository extends DefaultCrudRepository<
  DayConfig,
  typeof DayConfig.prototype.id,
  DayConfigRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(DayConfig, dataSource);
  }
}
