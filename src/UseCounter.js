import {useState} from 'react'

export function useCounter(initialValue = 0) {
    const [counter, setCounter] = useState(initialValue);
  
    function handlerCounterIncrement() {
      setCounter((c) => c + 1);
    }
  
    function handlerCounterDecrement() {
      setCounter((c) => c - 1);
    }
  
    function handlerCounterReset() {
      setCounter(initialValue);
    }
  
    return {
      counter: counter,
      onIncrement: handlerCounterIncrement,
      onDecrement: handlerCounterDecrement,
      onReset: handlerCounterReset,
    };
  }