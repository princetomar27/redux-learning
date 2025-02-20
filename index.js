import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

const inc = "increment";
const dec = "decrement";
const incByAmount = "incrementByAmount";

// store
const store = createStore(reducer, applyMiddleware(logger.default));

const historyState = [];

// reducer
function reducer(state = { amount: 1 }, action) {
  if (action.type === inc) {
    return { amount: state.amount + 1 };
  }
  if (action.type === dec) {
    return { amount: state.amount - 1 };
  }
  if (action.type === incByAmount) {
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

// Action creators
function incrementCounter() {
  return { type: inc };
}

function decrement() {
  return { type: dec };
}

function incrementByAmountCounter(amount) {
  return { type: incByAmount, payload: amount };
}

//----------------------------------------------------------------

setInterval(() => {
  store.dispatch(incrementByAmountCounter(4));
}, 1500);

console.log(store.getState());
