import { Dispatch, SetStateAction } from 'react';

enum ResponseStatus {
  s200 = '200',
  s404 = '404',
}

enum HttpMethods {
  get,
  head,
  post,
  put,
  delete,
  patch,
}

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
  security: unknown;
  summary: string;
  tags: string[];
};

export type AppDataType = {
  basePath?: string;
  canWeShowDetails: boolean;
  definitions?: unknown; // TODO: fix it some day
  error: boolean;
  errorMessage: string;
  externalDocs?: { description: string; url: string } | { description: string; url: string }[]; // TODO: not sure about it
  host?: string;
  info?: {
    contact: { email: string };
    description: string;
    license: { name: string; url: string };
    termsOfService: string;
    title: string;
    version: string;
  };
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
  tags?: {
    added: { [key in HttpMethods]: HTTPMethodType }[];
    description: string;
    externalDocs: { description: string; url: string }[] | null; // TODO: check it
    name: string;
  }[];
  waiting?: boolean;
};

export interface AppStateContextInterface {
  appData: AppDataType;
  setAppData: Dispatch<SetStateAction<AppDataType>>;
}
