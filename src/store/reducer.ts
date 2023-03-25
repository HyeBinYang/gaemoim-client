import { combineReducers } from "redux";
import { HYDRATE } from "next-redux-wrapper";
import modalReducer from "./modal";
import homeReducer from "./home";
import registerReducer from "./register";

const combinedReducer = combineReducers({
  modalReducer,
  homeReducer,
  registerReducer,
});

const rootReducer: typeof combinedReducer = (state, action) => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    };
  } else {
    return combinedReducer(state, action);
  }
};
export default rootReducer;
