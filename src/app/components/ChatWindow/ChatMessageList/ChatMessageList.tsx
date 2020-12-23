import * as React from "react";
import ChatBox from "../../../containers/ChatBox/ChatBox";
import "./ChatMessageList.css";

export interface IChatMessageListProps {
  messages: Array<any>;
}

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
    return (
      <div className="ChatMessageList">
        {this.props.messages.map((msg: any) => (
          <ChatBox message={msg} key={msg.num}/>
        ))}
      </div>
    );
  }
}
