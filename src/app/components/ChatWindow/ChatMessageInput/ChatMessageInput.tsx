import * as React from "react";
import "./ChatMessageInput.css";

export interface IChatMessageInputProps {}

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
    return <div className="ChatMessageInput">ChatMessageInput</div>;
  }
}
