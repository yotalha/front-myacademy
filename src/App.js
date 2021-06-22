import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement, incrementByAmount, decrementByAmount} from './actions';


function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();


  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>5</button>
      <button onClick={() => dispatch(decrementByAmount(5))}>-5</button>


      {isLogged ? <h3>valuable info i shouldnt see if i m not logged in bakemono</h3> : ''}
      <form action="../../post" method="post">
        <button type="submit">Connected?</button>
      </form>
      
    </div>
  );
}

export default App;
