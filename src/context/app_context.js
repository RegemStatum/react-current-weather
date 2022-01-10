import React, { useContext, useReducer } from "react";
// reducer
import reducer from "../reducers/app_reducer";
// actions
import { TEST } from "../actions";

const AppContext = React.createContext();

const initialState = {
  name: "AlKon",
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  return (
    <AppContext.Provider value={"context message"}>
      {children}
    </AppContext.Provider>
  );
};

// custom useContext hook
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
