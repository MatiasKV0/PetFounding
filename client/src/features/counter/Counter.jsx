import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount } from './counterSlice';

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Contador Redux: {count}</h1>
      <button 
        onClick={() => dispatch(increment())}
      >
        Incrementar
      </button>
      <button 
        onClick={() => dispatch(decrement())}
      >
        Decrementar
      </button>
      <button 
        onClick={() => dispatch(incrementByAmount(5))}
      >
        Incrementar por 5
      </button>
    </div>
  );
}