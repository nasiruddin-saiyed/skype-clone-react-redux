import * as React from 'react';
import './Empty.css';


export interface IEmptyProps {
}

export interface IEmptyState {
}

export default class Empty extends React.Component<IEmptyProps, IEmptyState> {
  constructor(props: IEmptyProps) {
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
