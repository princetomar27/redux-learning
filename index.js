import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

// store
const store = createStore(reducer, applyMiddleware(logger.default));

const historyState = [];

// reducer
function reducer(state = { amount: 1 }, action) {
  if (action.type === "increment") {
    return { amount: state.amount + 1 };
  }
  if (action.type === "decrement") {
    return { amount: state.amount - 1 };
  }
  if (action.type === "incrementByAmount") {
    return { amount: state.amount + action.payload };
  }
  return state;
}

// global state
// store.subscribe(() => {
//   historyState.push(store.getState());
//   console.log(historyState);
// });

// setInterval(() => {
//   store.dispatch({ type: "increment" });
// }, 2000);

// setInterval(() => {
//   store.dispatch({ type: "decrement" });
// }, 3000);

function incrementCounter() {
  return { type: "increment" };
}

setInterval(() => {
  store.dispatch(incrementCounter());
}, 1500);

console.log(store.getState());
