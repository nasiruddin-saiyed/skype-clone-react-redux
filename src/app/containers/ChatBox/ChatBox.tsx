import * as React from "react";

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
    return (
      <span className={`Chat ${is_user_msg ? "is-user-msg" : ""}`}>{text}</span>
    );
  }
}
