import { FOR_TEST } from "../Actions/test";

export default function test(state = {}, action) {
  switch (action.type) {
    case FOR_TEST:
      return {
        ...state,
        newData: action.data,
      };
    default:
      return state;
  }
}
