import * as React from "react";
import { setTypingValue } from "../../services/actions";
import store from "../../services/store";

export interface IChatBoxProps {
  message: any;
}

export interface IChatBoxState {}

export default class ChatBox extends React.Component<
  IChatBoxProps,
  IChatBoxState
> {
  constructor(props: IChatBoxProps) {
    super(props);

    this.state = {};
  }

  public render() {
    const { text, is_user_msg } = this.props.message;
    const editMessage = () =>{
        if (is_user_msg) {
            store.dispatch(setTypingValue(text))            
        }
    }
    return (
      <span className={`Chat ${is_user_msg ? "is-user-msg" : ""}`} onClick={editMessage}>{text}</span>
    );
  }
}
