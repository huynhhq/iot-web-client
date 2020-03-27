import {DefaultCrudRepository} from '@loopback/repository';
import {GeneralConfig, GeneralConfigRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class GeneralConfigRepository extends DefaultCrudRepository<
  GeneralConfig,
  typeof GeneralConfig.prototype.id,
  GeneralConfigRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(GeneralConfig, dataSource);
  }
}
