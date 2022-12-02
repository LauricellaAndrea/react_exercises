import {useCallback, useState} from 'react'

export function useCounter(initialValue = 0) {
    const [counter, setCounter] = useState(initialValue);
  
   const handlerCounterIncrement = useCallback(function() {
      setCounter((c) => c + 1);
    }, [])
  
    const handlerCounterDecrement = useCallback(function() {
      setCounter((c) => c - 1);
    }, [])
  
    const handlerCounterReset = useCallback(function() {
      setCounter(initialValue);
    }, [initialValue])
  
    return {
      counter: counter,
      onIncrement: handlerCounterIncrement,
      onDecrement: handlerCounterDecrement,
      onReset: handlerCounterReset,
    };
  }