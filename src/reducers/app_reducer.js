// actions
import { TEST } from "../actions";

const reducer = (state, action) => {
  if ((action.type = TEST)) {
    return {
      ...state,
      test: true,
    };
  }
  throw new Error(`no such as ${action.type} action type`);
};

export default reducer;
