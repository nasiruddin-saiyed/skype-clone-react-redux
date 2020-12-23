import * as React from 'react';
import User from '../../containers/User/User';
import './Sidebar.css';

export interface ISidebarProps {
    contacts: any
}

export interface ISidebarState {
}

export default class Sidebar extends React.Component<ISidebarProps, ISidebarState> {
  constructor(props: ISidebarProps) {
    super(props);

    this.state = {
    }
  }

  public render() {
    return (
      <div>
        <aside className="Sidebar">
            {this.props.contacts.map((contact:any) => <User user={contact} key={contact.user_id} />)}

        </aside>
      </div>
    );
  }
}
