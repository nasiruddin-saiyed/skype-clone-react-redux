import * as React from 'react';
import './ChatWindow.css';

export interface IChatWindowProps {
    activeUserId:any;
}

export interface IChatWindowState {
}

export default class ChatWindow extends React.Component<IChatWindowProps, IChatWindowState> {
  constructor(props: IChatWindowProps) {
    super(props);

    this.state = {
    }
  }

  public render() {
    return (
      <div>
        
      </div>
    );
  }
}
