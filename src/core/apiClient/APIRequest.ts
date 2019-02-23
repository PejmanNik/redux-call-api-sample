import APIMiddleware from "./APIMiddleware";

export enum RequestMethods {
  Get = "GET",
  Post = "POST",
  Put = "PUT",
  Patch = "PATCH",
  Delete = "DELETE"
}

export interface RequestOptions {
  storeResponse: boolean;
  storeResponseOnError: boolean;
}

export default class APIRequest {
  url: string;
  method: RequestMethods;
  queryString: string = "";
  data?: Object;
  options: RequestOptions = { ...defaultRequestOptions };
  middleware: Array<APIMiddleware> = [];

  private _id?: string;
  get id(): string {
    if (this._id) {
      return this._id;
    } else {
      const url = this.url.split("/");
      return url[url.length - 1];
    }
  }
  set id(value: string) {
    this._id = value;
  }

  constructor(url: string, method: RequestMethods, data?: Object) {
    this.url = url;
    this.method = method;
    this.data = data;
  }
}

export const defaultRequestOptions: RequestOptions = {
  storeResponse: true,
  storeResponseOnError: false
};
