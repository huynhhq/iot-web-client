import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Postions extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

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

  constructor(data?: Partial<Postions>) {
    super(data);
  }
}

export interface PostionsRelations {
  // describe navigational properties here
}

export type PostionsWithRelations = Postions & PostionsRelations;
