import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import saga from "../middleware/RootSaga";
import RootReducers from "../reducers/RootReducer";

const RESET_STORE_ACTION_TYPE = "store/reset";

const rootReducerWithReset = (state, action) => {
  if (action.type === RESET_STORE_ACTION_TYPE) {
    return RootReducers(undefined, { type: undefined });
  }
  return RootReducers(state, action);
};

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducerWithReset,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false,
      immutableCheck: false,
      serializableCheck: false,
    }).concat(sagaMiddleware),
  devTools: process.env.RECT_APP_ENV === "development",
});

sagaMiddleware.run(saga);

export const resetStore = () => ({ type: RESET_STORE_ACTION_TYPE });

export default store;
