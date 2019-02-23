import APIRequest from "./APIRequest";
import { MiddlewareAPI, Dispatch, AnyAction } from "redux";
import APIResponse from "./APIResponse";

export default interface APIMiddleware {
  beforeSend(
    request: APIRequest,
    storeApi: MiddlewareAPI<Dispatch<AnyAction>, any>
  ): boolean;

  afterSend(
    response: APIResponse,
    storeApi: MiddlewareAPI<Dispatch<AnyAction>, any>
  ): boolean;
}
