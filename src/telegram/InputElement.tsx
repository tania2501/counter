import React, { ChangeEvent, useState } from "react";
import { MessageType } from "../App";
import { InputButtons } from "./InputButtons";

type InputType = {
  title: string;
  setTitle: (title: string) => void;
  message: MessageType[]
  error: string
  setError: (error: string)=>void
  remove: ()=>void
};
export const InputElement = (props: InputType) => {
  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    props.setTitle(event.currentTarget.value);
  };

  return (
    <div>
      <input value={props.title} onChange={onChangeInput} />
      {props.error}
      <div>
        <InputButtons title={'Delete last message'} add={props.remove}/>
        {props.message.map((el: {message: string}, index: number) => {
            return <li key={index}>{el.message}</li>
          })}
      </div>
    </div>
  );
};
