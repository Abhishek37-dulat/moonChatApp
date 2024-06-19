import userDetails from "./ducks/UsersDuck";
import { persistCombineReducers } from "redux-persist";
import storage from "redux-persist/lib/storage";
import chatDetails from "./ducks/ChatDuck";

const appVersion = process.env?.REACT_APP_VERSION ?? "0.0.0";

const persistConfig = {
  key: `rootstore_${appVersion}`,
  storage,
};

const reducers = {
  userDetails,
  chatDetails,
};

export default persistCombineReducers(persistConfig, reducers);
