import * as React from 'react';
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
        <aside className="Sidebar">Sidebar</aside>
      </div>
    );
  }
}
