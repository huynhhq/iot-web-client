import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class DayConfig extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'date',
  })
  time_in?: string;

  @property({
    type: 'date',
  })
  time_out?: string;

  @property({
    type: 'string',
  })
  day_name?: string;

  @property({
    type: 'boolean',
  })
  is_has_rest?: boolean;

  @property({
    type: 'string',
    default: 'active',
  })
  status?: string;

  @property({
    type: 'date',
  })
  created_at?: string;

  @property({
    type: 'boolean',
  })
  is_off?: boolean;

  @property({
    type: 'number',
  })
  month?: number;

  @property({
    type: 'number',
  })
  week?: number;

  @property({
    type: 'number',
  })
  year?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<DayConfig>) {
    super(data);
  }
}

export interface DayConfigRelations {
  // describe navigational properties here
}

export type DayConfigWithRelations = DayConfig & DayConfigRelations;
