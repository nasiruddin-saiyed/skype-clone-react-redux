import * as React from "react";
import { setTypingValue } from "../../services/actions";
import store from "../../services/store";
import "./ChatMessageInput.css";

export interface IChatMessageInputProps {
    value:any
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
      const value = this.props.value
    const handleChange = (e:any) => {
      store.dispatch(setTypingValue(e.target.value));
    };
    return (
      <form className="Message">
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
