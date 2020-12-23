import * as React from "react";
import "./ChatMessageList.css";

export interface IChatMessageListProps {}

export interface IChatMessageListState {}

export default class ChatMessageList extends React.Component<
  IChatMessageListProps,
  IChatMessageListState
> {
  constructor(props: IChatMessageListProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return <div className="ChatMessageList">ChatMessageList</div>;
  }
}
