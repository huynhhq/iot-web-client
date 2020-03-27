import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class AttendanceExportLog extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'date',
  })
  created_at?: string;

  @property({
    type: 'number',
    required: true,
  })
  user_id: number;

  @property({
    type: 'number',
  })
  sum_of_hours?: number;

  @property({
    type: 'string',
    default: 'active',
  })
  status?: string;

  @property({
    type: 'number',
  })
  sum_of_late_day?: number;

  @property({
    type: 'number',
  })
  sum_of_day_off?: number;

  @property({
    type: 'number',
  })
  month?: number;

  @property({
    type: 'number',
  })
  year?: number;

  @property({
    type: 'number',
  })
  week?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<AttendanceExportLog>) {
    super(data);
  }
}

export interface AttendanceExportLogRelations {
  // describe navigational properties here
}

export type AttendanceExportLogWithRelations = AttendanceExportLog & AttendanceExportLogRelations;
