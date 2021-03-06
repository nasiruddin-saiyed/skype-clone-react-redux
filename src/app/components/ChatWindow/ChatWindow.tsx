import * as React from 'react';
import store from '../../services/store';
import ChatHeader from '../../containers/ChatHeader/ChatHeader';
import ChatMessageList from '../../containers/ChatMessageList/ChatMessageList';
import  _ from 'lodash';

import './ChatWindow.css';
import ChatMessageInput from '../../containers/ChatMessageInput/ChatMessageInput';

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
    const activeMsgs = state.messages[this.props.activeUserId];
    const typing = state.typing;

  
    return (
        <div className="ChatWindow">
            <ChatHeader user={activeUser} />
            <ChatMessageList messages={_.values(activeMsgs)} />
            <ChatMessageInput value={typing} />
        </div>
    );
  }
}
