import React, { useState } from 'react';
import './App.css';

function Chetchikapp() {
  let [count, setcount] = useState(0)
  let onClickPlus = () => setcount(count + 1)
  let onclickMinus = () => setcount(count - 1)
  let reSet = () => setcount(0)
  return (
    <div className="App">
      <div>
        <h2 className='s'>Cчётчик</h2>
        <h3 className='c'>{count}</h3>
        <button onClick={onClickPlus} className='plus'>+Увеличить</button>
        <button  onClick={onclickMinus} className='minus'>-Уменишить</button>
      </div>
      <button disabled={count===3} onClick={reSet} className='r'>Сброс</button>
    </div>
  );
}
export default Chetchikapp;
