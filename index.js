import { createStore } from "redux";

// store
const store = createStore(reducer);

const historyState = [];

// reducer
function reducer(state = { amount: 1 }, action) {
  if (action.type === "increment") {
    return { amount: state.amount + 1 };
  }
  return state;
}

// global state
store.subscribe(() => {
  historyState.push(store.getState());
  console.log(historyState);
});

setInterval(() => {
  store.dispatch({ type: "increment" });
}, 2000);

console.log(store.getState());
