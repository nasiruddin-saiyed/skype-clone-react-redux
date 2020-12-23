import * as React from "react";
import { sendMessage, setTypingValue } from "../../services/actions";
import store from "../../services/store";
import "./ChatMessageInput.css";

export interface IChatMessageInputProps {
  value: any;
}

export interface IChatMessageInputState {}

export default class ChatMessageInput extends React.Component<
  IChatMessageInputProps,
  IChatMessageInputState
> {
  constructor(props: IChatMessageInputProps) {
    super(props);

    this.state = {};
  }

  public render() {
    const value = this.props.value;
    //first retrieve the current state object
    const state: any = store.getState();

    const handleSubmit = (e: any) => {
      e.preventDefault();
      const { typing, activeUserId, num = false } = state;      
      store.dispatch(sendMessage(typing, activeUserId, num ? num : false));
    };
    const handleChange = (e: any) => {
      store.dispatch(setTypingValue(e.target.value));
    };
    return (
      <form className="Message" onSubmit={handleSubmit}>
        <input
          className="Message__input"
          onChange={handleChange}
          value={value}
          placeholder="write a message"
        />
      </form>
    );
  }
}
