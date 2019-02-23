import APIResponse from "../apiClient/APIResponse";

type StateType<ReducerOrMap> = ReducerOrMap extends (...args: any[]) => any
  ? ReturnType<ReducerOrMap>
  : ReducerOrMap extends object
  ? { [K in keyof ReducerOrMap]: StateType<ReducerOrMap[K]> }
  : never;

export type Store = StateType<typeof import("./store").default>;
export type RootState = StateType<typeof import("./reducers/index").default>;
export type ApiResponseDict = { [key: string]: APIResponse };