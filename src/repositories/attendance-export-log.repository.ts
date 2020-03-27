import {DefaultCrudRepository} from '@loopback/repository';
import {AttendanceExportLog, AttendanceExportLogRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class AttendanceExportLogRepository extends DefaultCrudRepository<
  AttendanceExportLog,
  typeof AttendanceExportLog.prototype.id,
  AttendanceExportLogRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(AttendanceExportLog, dataSource);
  }
}
