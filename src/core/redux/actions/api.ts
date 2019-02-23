import APIRequest from "../../apiClient/APIRequest";
import types from "../types";
import APIResponse from "./../../apiClient/APIResponse";

export type CallAPIPromiseFunc = (response: APIResponse) => void;

export function callAPI(
  request: APIRequest,
  resolve?: CallAPIPromiseFunc,
  reject?: CallAPIPromiseFunc
) {
  return { type: types.api.call, request, resolve, reject };
}

export function removeAPIResponse(id: string) {
  return { type: types.api.remove, id };
}
