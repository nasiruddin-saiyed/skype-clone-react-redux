import * as React from "react";
import './Main.css';

export interface IMainProps {}

export interface IMainState {}

export default class Main extends React.Component<IMainProps, IMainState> {
  constructor(props: IMainProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return (
      <div className="Main">
        <main>Main Stuff</main>
      </div>
    );
  }
}
