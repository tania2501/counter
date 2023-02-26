import React from "react";
import { MessageType } from "../App";
import { InputButtons } from "./InputButtons";
import { InputElement } from "./InputElement";

type TelegramType ={
  title: string
  setTitle: (title: string)=>void
  message: MessageType[]
  error: string
  setError: (error: string)=>void
  addMessage: (title: string)=>void
  resetOnClick: ()=>void
  removeMessage: ()=>void
}

export const Telegram = (props: TelegramType) => {
  const maxValue = 5;
  const value = 5 - props.message.length;
  return (
    <div className="wrapper">
      <h3>{props.message.length === 5 ? 'Limit of messages is exceeded!' : 'You can send only ' + value + ' messeges'}</h3>
      <div className="message">
        <InputElement title={props.title} setTitle={props.setTitle} message={props.message} error={props.error} setError={props.setError} remove={props.removeMessage}/>
        <InputButtons  title={"send"} add={()=>props.addMessage(props.title)} disabled={props.message.length === maxValue}/>
        <InputButtons title={"clear"} add={props.resetOnClick}/>
      </div>
    </div>
  );
};
