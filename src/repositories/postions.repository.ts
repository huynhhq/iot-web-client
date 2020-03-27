import {DefaultCrudRepository} from '@loopback/repository';
import {Postions, PostionsRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PostionsRepository extends DefaultCrudRepository<
  Postions,
  typeof Postions.prototype.id,
  PostionsRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Postions, dataSource);
  }
}
