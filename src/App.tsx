import React, { useState } from "react";
import "./App.css";
import { Counter } from "./Counter";
import { Telegram } from "./telegram/Telegram";

export type MessageType = {
  message: string;
};

function App() {
  const startValue = 0;
  const MaxValue = 5;
  const [num, setNum] = useState(startValue);
  const [title, setTitle] = useState("");

  const onClickPlus = () => {
    const numPlus = num + 1;
    setNum(numPlus);
  };
  const onClickReset = () => {
    setNum(startValue);
  };
  let [error, setError] = useState("");
  let [message, setMessage] = useState<MessageType[]>([]);
  const addMessage = (text: string) => {
    let newMessage = {
      message: text,
    };
    newMessage.message.length
      ? setMessage([newMessage, ...message])
      : setError("error");

    setTitle("");
  };
  const resetOnClick = () => {
    setTitle("");
  };
  const removeMessage = () => {
    if (message.length) {
      const lastMessage = message[0];
      const filterMessage = message.filter((m) => m !== lastMessage);
      setMessage(filterMessage);
    }
  };
  return (
    <div className="App">
      <Counter
        value={num}
        onClickPlus={onClickPlus}
        onClickReset={onClickReset}
      />
      <div className="telegram">
        <Telegram
          title={title}
          setTitle={setTitle}
          message={message}
          error={error}
          setError={setError}
          addMessage={addMessage}
          resetOnClick={resetOnClick}
          removeMessage={removeMessage}
        />
      </div>
    </div>
  );
}

export default App;
