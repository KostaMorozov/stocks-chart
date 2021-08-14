import { useContext } from "react";
import { ReactReduxContext } from "react-redux";

export const InputSelector = (input) => {
  const { store } = useContext(ReactReduxContext);
  return store.getState()[input][0];
};
