// src/store/developers/actions.js
export function developersFetched(data) {
  return {
    type: "developers/FETCHED",
    payload: data
  };
}
