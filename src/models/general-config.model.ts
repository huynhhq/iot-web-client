import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class GeneralConfig extends Entity {
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
    type: 'number',
  })
  time_rest?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<GeneralConfig>) {
    super(data);
  }
}

export interface GeneralConfigRelations {
  // describe navigational properties here
}

export type GeneralConfigWithRelations = GeneralConfig & GeneralConfigRelations;
