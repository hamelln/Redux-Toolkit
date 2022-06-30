import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import styles from "./Color.module.css";
import { selectColor } from "./colorSlice";

const Color = () => {
  const [count, setCount] = useState<Number>(0);
  const color = useAppSelector(selectColor);
  const dispatch = useAppDispatch();

  return (
    <>
      change counts: {count}
      <div className={styles.box}></div>
      color: {color}
    </>
  );
};

export default Color;
