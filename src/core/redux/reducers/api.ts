import types from "../types";
import { ApiResponseDict } from "../storeTypes";

export default function api(state: ApiResponseDict = {}, action: any) {
  switch (action.type) {
    case types.api.store:
      return { ...state, [action.id]: action.response };
    case types.api.remove:
      return { ...state, [action.id]: undefined };
    default:
      return state;
  }
}
