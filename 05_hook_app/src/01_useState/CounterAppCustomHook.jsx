import {useCounter} from "../hooks/useCounter.js";

export const CounterAppCustomHook = () => {
  const {counter, increment, decrement, reset} = useCounter(10)

  return (
    <>
      <h1>CounterApp with hook: {counter}</h1>
      <hr/>
      <button className={"btn btn-primary"} onClick={() => increment(2)}>+1</button>
      <button className={"btn btn-primary"} onClick={reset}>Reset</button>
      <button className={"btn btn-primary"} onClick={() => decrement(2)}>-1</button>
    </>
  )
}