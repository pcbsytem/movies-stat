import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./modules/rootReducer";

const middleware = applyMiddleware(thunk);

const store = createStore(rootReducer, composeWithDevTools(middleware));

export default store;
