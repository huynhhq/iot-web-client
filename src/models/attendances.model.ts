import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Attendances extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
    required: true,
  })
  user_id: number;

  @property({
    type: 'number',
    required: true,
  })
  finger_id: number;

  @property({
    type: 'string',
    default: 'active',
  })
  status?: string;

  @property({
    type: 'date',
  })
  created_at?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Attendances>) {
    super(data);
  }
}

export interface AttendancesRelations {
  // describe navigational properties here
}

export type AttendancesWithRelations = Attendances & AttendancesRelations;
