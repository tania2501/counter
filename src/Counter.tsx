import React from "react";
import { Button } from "./Button";

type CounterType = {
  value: number;
  onClickPlus: ()=>void
  onClickReset: ()=>void

};

export const Counter = (props: CounterType) => {
  return (
    <div className="main">
      <div className="numBlock">
        <h3>{props.value}</h3>
      </div>
      <div className="buttons">
        <Button title={"inc"} 
                onClickChange={props.onClickPlus} 
                value={props.value === 5}/>
        <Button title={"reset"} 
                onClickChange={props.onClickReset} 
                value={props.value === 0}/>
      </div>
    </div>
  );
};
