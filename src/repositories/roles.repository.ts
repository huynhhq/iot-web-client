import {DefaultCrudRepository} from '@loopback/repository';
import {Roles, RolesRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class RolesRepository extends DefaultCrudRepository<
  Roles,
  typeof Roles.prototype.id,
  RolesRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Roles, dataSource);
  }
}
