import React, { useState } from "react";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from "./counterSlice";
import styles from "./Counter.module.css";

export function Counter() {
  // count state를 가져온다.
  const count = useAppSelector(selectCount);
  // dispatch API를 가져온다. 사용할 땐 어플에 등록된, 정의한 action을 부여하면 된다.
  const dispatch = useAppDispatch();
  // 자체 state 정의. 버튼을 누를 시 증감량을 정하는 숫자. 기본값은 2
  const [incrementAmount, setIncrementAmount] = useState("2");

  //
  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <div className={styles.row}>
        {/* 마이너스 버튼. 클릭시 decrement()액션을 dispatch한다.  */}
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        {/* 화면에 표시되는 count */}
        <span className={styles.value}>{count}</span>
        {/* 플러스 버튼. 클릭시 increment() 액션을 dispatch한다. */}
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        {/* 증감량을 입력하는 input. 바로 setState를 사용한다. */}
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        {/* 정의한 숫자를 더하는 버튼. incrementByAmount 액션을 dispatch한다. */}
        <button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
        {/* 정의한 숫자를 비동기로 더하는 버튼. incrementAsync 액션을 dispatch한다. */}
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </button>
        {/* 현재 숫자가 홀수면 정의한 숫자를 더하는 버튼. incrementIfOdd 액션을 dispatch한다.*/}
        <button
          className={styles.button}
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
}
