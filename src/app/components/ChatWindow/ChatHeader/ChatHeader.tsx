import * as React from 'react';
import './ChatHeader.css';

export interface IChatHeaderProps {
}

export interface IChatHeaderState {
}

export default class ChatHeader extends React.Component<IChatHeaderProps, IChatHeaderState> {
  constructor(props: IChatHeaderProps) {
    super(props);

    this.state = {
    }
  }

  public render() {
    return (
        <div className="ChatHeader">ChatHeader</div>
    );
  }
}
