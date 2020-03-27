import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Fingers extends Entity {
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
    type: 'string',
    required: true,
  })
  code: string;

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

  constructor(data?: Partial<Fingers>) {
    super(data);
  }
}

export interface FingersRelations {
  // describe navigational properties here
}

export type FingersWithRelations = Fingers & FingersRelations;
