import { useLocation } from "react-router-dom";
// actions
import { CHANGING_PAGE } from "../actions";

const reducer = (state, action) => {
  if (action.type === CHANGING_PAGE) {
    return {
      ...state,
    };
  }
  throw new Error(`no such as ${action.type} action type`);
};

export default reducer;
