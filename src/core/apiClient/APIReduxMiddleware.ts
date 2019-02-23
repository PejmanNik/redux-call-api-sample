import { Middleware, MiddlewareAPI, Dispatch, AnyAction } from "redux";
import types from "../redux/types";
import APIRequest from "./APIRequest";
import APIResponse from "./APIResponse";
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

const apiClient: Middleware = api => next => action => {
  if (action.type === types.api.call) {
    const request: APIRequest = action.request;

    if (process.env.NODE_ENV === "development") {
      let message = `%c${request.method} `;
      message += `%c/${request.url}`;
      message += `%c/${request.queryString} `;

      console.log(
        message,
        "color:#4285f4",
        "color:black",
        "color:rgba(0,0,0,0.54)",
        request.data ? request.data : ""
      );
    }

    if (
      !request.url.startsWith("http://") &&
      !request.url.startsWith("https://")
    ) {     
      request.url = process.env.REACT_APP_API_URL + request.url;
    }
    
    const requestConfig: AxiosRequestConfig = {
      url: request.url + request.queryString,
      method: request.method.toString(),
      data: request.data
    };

    if (runBeforeSendMiddleware(api, request)) {
      axios
        .request(requestConfig)
        .then(x => successRequest(x, api, action, request))
        .catch(x => failedRequest(x, api, action, request));
    }
  }
  return next(action);
};

function successRequest(
  response: AxiosResponse,
  api: MiddlewareAPI<Dispatch<AnyAction>, any>,
  action: any,
  request: APIRequest
) {
  const apiResponse = createApiResponse(request, response);
  apiResponse.headers = response.headers;

  if (runAfterSendMiddleware(api, apiResponse)) {
    if (request.options.storeResponse) {
      dispatch(api, apiResponse);
    }

    if (action.resolve) {
      action.resolve(apiResponse);
    }
  }
}

function failedRequest(
  error: AxiosError,
  api: MiddlewareAPI<Dispatch<AnyAction>, any>,
  action: any,
  request: APIRequest
) {
  const apiResponse = createApiResponse(request, error.response, error);

  if (runAfterSendMiddleware(api, apiResponse)) {
    if (request.options.storeResponseOnError) {
      dispatch(api, apiResponse);
    }

    if (action.reject) {
      action.reject(apiResponse);
    }
  }
}

function runBeforeSendMiddleware(
  api: MiddlewareAPI<Dispatch<AnyAction>, any>,
  request: APIRequest
): boolean {
  for (let middleware of request.middleware) {
    if (middleware.beforeSend) {
      let result = middleware.beforeSend(request, api);

      if (!result) {
        return false;
      }
    }
  }

  return true;
}

function runAfterSendMiddleware(
  api: MiddlewareAPI<Dispatch<AnyAction>, any>,
  response: APIResponse
): boolean {
  for (let middleware of response.request.middleware) {
    if (middleware.afterSend) {
      let result = middleware.afterSend(response, api);

      if (!result) {
        return false;
      }
    }
  }

  return true;
}

function dispatch(
  api: MiddlewareAPI<Dispatch<AnyAction>, any>,
  response: APIResponse
) {
  api.dispatch({
    type: types.api.store,
    id: response.request.id,
    response: response
  });
}

function createApiResponse(
  request: APIRequest,
  response?: AxiosResponse,
  error?: AxiosError
) {
  let apiResponse: APIResponse;

  if (response) {
    apiResponse = new APIResponse(
      response.status,
      response.statusText,
      response.data,
      request
    );
  } else {
    apiResponse = new APIResponse(0, "", null, request);
  }

  if (error) {
    apiResponse.error = error.message;
  }

  return apiResponse;
}

export default apiClient;
