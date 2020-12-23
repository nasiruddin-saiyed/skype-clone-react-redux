import * as React from "react";
import ChatBox from "../ChatBox/ChatBox";
import "./ChatMessageList.css";

export interface IChatMessageListProps {
  messages: Array<any>;
}

export interface IChatMessageListState {}

export default class ChatMessageList extends React.Component<
  IChatMessageListProps,
  IChatMessageListState
> {
  chatsRef: React.RefObject<any>;
  constructor(props: IChatMessageListProps) {
    super(props);

    this.state = {};
    this.chatsRef = React.createRef();
  }
  componentDidMount() {
    this.scrollToBottom();
  }
  componentDidUpdate() {
    this.scrollToBottom();
  }
  scrollToBottom = () => {
    this.chatsRef.current.scrollTop = this.chatsRef.current.scrollHeight;
  };

  public render() {
    return (
      <div className="ChatMessageList" ref={this.chatsRef}>
        {this.props.messages.map((msg: any) => (
          <ChatBox message={msg} key={msg.num} />
        ))}
      </div>
    );
  }
}
