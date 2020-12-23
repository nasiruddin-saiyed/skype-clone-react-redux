import * as React from 'react';
import store from '../../services/store';
import ChatHeader from './ChatHeader/ChatHeader';
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
    const state = store.getState();
    const activeUser = state.contacts[this.props.activeUserId];
  
  
    return (
        <div className="ChatWindow">
            <ChatHeader user={activeUser} />
        </div>
    );
  }
}
