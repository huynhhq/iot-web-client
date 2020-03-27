import {DefaultCrudRepository} from '@loopback/repository';
import {Attendances, AttendancesRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class AttendancesRepository extends DefaultCrudRepository<
  Attendances,
  typeof Attendances.prototype.id,
  AttendancesRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Attendances, dataSource);
  }
}
