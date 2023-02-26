import React from "react";

type ButtonsType = {
  title: string;
  add: () => void;
  disabled?: boolean
};
export const InputButtons = (props: ButtonsType) => {
  return (
    <div>
      <button onClick={props.add} className="button" disabled={props.disabled}>
        {props.title}
      </button>
    </div>
  );
};
