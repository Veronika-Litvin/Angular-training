import { HttpHeaders, HttpParams } from "@angular/common/http";

export type GetParams = HttpParams | {
  [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
};

export type HttpServiceHeaders = HttpHeaders | {
  [header: string]: string | string[];
};

export interface HttpOtions {
  headers?: HttpServiceHeaders,
  params?: GetParams,
  observe?: 'body' | 'events' | 'response',
  responseType?: 'arraybuffer' | 'blob' | 'json' | 'text'
}