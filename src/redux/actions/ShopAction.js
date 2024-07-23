export const START_LOAD = "START_LOAD";
export const SUCCESS = "SUCCESS";
export const ERROR = "ERROR";

export function startLoad() {
  return {
    type: START_LOAD,
  };
}

export function success(payload) {
  return {
    type: SUCCESS,
    payload,
  };
}

export function error(payload) {
  return {
    type: ERROR,
    payload,
  };
}
