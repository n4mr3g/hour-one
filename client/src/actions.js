export function set(data) {
  return { type: "SET_OFFERS", payload: data };
}

export function setTrue(data) {
  return { type: "SET_TRUE", payload: data };
}

export function setFalse(data) {
  return { type: "SET_FALSE", payload: data };
}

export function login(data) {
  return { type: "LOG_IN", payload: data };
}
