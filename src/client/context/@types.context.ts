import { Dispatch, SetStateAction } from 'react';

type ResponseStatus =
  | '100'
  | '101'
  | '102'
  | '103'
  | '200'
  | '201'
  | '202'
  | '203'
  | '204'
  | '205'
  | '206'
  | '207'
  | '208'
  | '226'
  | '300'
  | '301'
  | '302'
  | '303'
  | '304'
  | '305'
  | '307'
  | '308'
  | '404'
  | '500'; // TODO: finish it

type ParameterType = {
  description: string;
  format?: string;
  in: string;
  name: string;
  required: boolean;
  schema?: {
    $ref: string;
  };
  type: string;
};

type ResponseType = {
  description: string;
  schema: {
    items: {
      $ref: string;
    };
  };
  type: string;
};

type HTTPMethodType = {
  consumes: string[];
  description: string;
  operationId: string;
  parameters: ParameterType;
  produces: string[];
  responses: { [key in ResponseStatus]: ResponseType }[];
  security: unknown; // TODO: fix it
  summary: string;
  tags: string[];
};

type HttpMethods = 'delete' | 'get' | 'post' | 'put';

export type TagType = {
  added: Record<HttpMethods | 'url', HTTPMethodType | string>[];
  description: string;
  externalDocs: { description: string; url: string }[] | null; // TODO: check it
  name: string;
};

export type InfoType = {
  contact: { email: string };
  description: string;
  license: { name: string; url: string };
  termsOfService: string;
  title: string;
  version: string;
};

export type AppDataType = {
  basePath?: string;
  canWeShowDetails: boolean;
  definitions?: unknown; // TODO: fix it some day
  error: boolean;
  errorMessage: string;
  externalDocs?: { description: string; url: string } | { description: string; url: string }[]; // TODO: not sure about it
  host?: string;
  info?: InfoType;
  paths?: unknown; // TODO: fix it some day
  schemes?: string[];
  securityDefinitions?: {
    api_key: {
      in: string;
      name: string;
      petstore_auth: {
        authorizationUrl: string;
        flow: string;
        scopes: {
          ['read:pets']: string;
          ['write:pets']: string;
        };
      };
      swagger: string;
    };
  };
  tags?: TagType[];
  waiting?: boolean;
};

export interface AppStateContextInterface {
  appData: AppDataType;
  setAppData: Dispatch<SetStateAction<AppDataType>>;
}
