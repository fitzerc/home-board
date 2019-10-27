import { createStore, applyMiddleware } from "redux";
import { rootReducer } from ".";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk";

export default function configureStore(initialState: any) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(reduxImmutableStateInvariant(), thunk)
  );
}
