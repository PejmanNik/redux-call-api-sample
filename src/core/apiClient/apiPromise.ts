import APIRequest from "./APIRequest";
import store from "../redux/store";
import { callAPI } from "../redux/actions/api";
import APIResponse from "./APIResponse";

export default async function apiPromise(request: APIRequest) {
  return new Promise<APIResponse>((resolve, reject) => {
    store.dispatch(callAPI(request, resolve, reject));
  });
}