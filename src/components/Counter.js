import { useSelector, useDispatch } from "react-redux";

import {
  increment,
  decrement,
  increase,
  reset,
  toggleShowCounter,
} from "../Redux/CounterReducer";

import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const isShown = useSelector((state) => state.counter.showCounter);

  const increamentHandler = () => {
    dispatch(increment());
  };

  const decreamentHandler = () => {
    dispatch(decrement());
  };

  const resetHandler = () => {
    dispatch(reset());
  };

  const increaseHandler = () => {
    dispatch(increase(5));
  };
  const toggleCounterHandler = () => {
    dispatch(toggleShowCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {isShown && <div className={classes.value}>{counter.counter}</div>}
      <div>
        <button onClick={increamentHandler}>Increament</button>
        <button onClick={decreamentHandler}>Decreament</button>
        <button onClick={resetHandler}>Reset</button>
        <button onClick={increaseHandler}>Increase by 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
