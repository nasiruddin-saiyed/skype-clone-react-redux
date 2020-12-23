import * as React from "react";
import "./ChatHeader.css";

export interface IChatHeaderProps {
  user: any;
}

export interface IChatHeaderState {}

export default class ChatHeader extends React.Component<
  IChatHeaderProps,
  IChatHeaderState
> {
  constructor(props: IChatHeaderProps) {
    super(props);

    this.state = {};
  }

  public render() {
    const { name, status } = this.props.user;

    return (
      <header className="Header">
        <h1 className="Header__name">{name}</h1>
        <p className="Header__status">{status}</p>
      </header>
    );
  }
}
