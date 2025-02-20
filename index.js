import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import axios from "axios";
import { thunk } from "redux-thunk";

// action types
const inc = "increment";
const dec = "decrement";
const incByAmount = "incrementByAmount";
const init = "init";

// store
const store = createStore(reducer, applyMiddleware(logger.default, thunk));

const historyState = [];

// reducer
function reducer(state = { amount: 1 }, action) {
  switch (action.type) {
    case init:
      return { amount: action.payload };

    case inc:
      return { amount: state.amount + 1 };

    case dec:
      return { amount: state.amount - 1 };
    case incByAmount:
      return { amount: state.amount + action.payload };
    default:
      return state;
  }
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

// Async API call to get user details

// Action creators

async function getUser(dispatch, getState) {
  try {
    const { data } = await axios.get("http://localhost:3000/accounts/1");
    console.log("User data fetched:", data);
    dispatch(initUser(data.amount));
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
}

function initUser(value) {
  return {
    type: init,
    payload: value,
  };
}

// async function initUser(val) {
//   return { type: init, payload: val };
// }

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

setTimeout(() => {
  store.dispatch(getUser);
}, 3000);
