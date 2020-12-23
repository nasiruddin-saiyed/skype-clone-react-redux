import * as React from "react";
import ChatWindow from "../ChatWindow/ChatWindow";
import Empty from "../Empty/Empty";
import "./Main.css";

export interface IMainProps {
  user: any;
  activeUserId: any;
}

export interface IMainState {}

export default class Main extends React.Component<IMainProps, IMainState> {
  constructor(props: IMainProps) {
    super(props);

    this.state = {};
  }
  renderMainContent() {
    if (!this.props.activeUserId) {
      return <Empty user={this.props.user} activeUserId={this.props.activeUserId} />;
    } else {
      return <ChatWindow activeUserId={this.props.activeUserId} />;
    }
  }

  public render() {
    return (
      <div className="Main">
        <main>{this.renderMainContent()}</main>
      </div>
    );
  }
}
