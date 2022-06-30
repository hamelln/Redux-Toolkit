import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import styles from "./Color.module.css";
import { changeBlue, changeBlack, selectColor } from "./colorSlice";

const Color = () => {
  const [count, setCount] = useState<number>(0);
  const color = useAppSelector(selectColor);
  const dispatch = useAppDispatch();
  const handleClick = () => {
    setCount(count + 1);
    if (count % 2 === 0) {
      dispatch(changeBlue());
    } else {
      dispatch(changeBlack());
    }
  };

  return (
    <>
      change counts: {count}
      <div className={styles.box}></div>
      <p>current color string: {color}</p>
      <button onClick={handleClick}>Click me!</button>
    </>
  );
};

export default Color;
