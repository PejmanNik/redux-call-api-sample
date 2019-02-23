import APIRequest from "./APIRequest";

export default class APIResponse {
  status: number;
  statusText: string;
  headers: any;
  response: any;
  request: APIRequest;
  error: string | undefined;

  constructor(
    status: number,
    statusText: string,
    response: any,
    request: APIRequest
  ) {
    this.status = status;
    this.statusText = statusText;
    this.response = response;
    this.request = request;
  }
}
