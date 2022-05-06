import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import userReducer from "./userReducer";

const rootReducer = combineReducers({
    user: userReducer
});

export const store = legacy_createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
