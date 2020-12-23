import * as React from "react";
import "./Empty.css";

export interface IEmptyProps {
  user: any;
  activeUserId: any;
}

export interface IEmptyState {}

export default class Empty extends React.Component<IEmptyProps, IEmptyState> {
  constructor(props: IEmptyProps) {
    super(props);

    this.state = {};
  }

  public render() {
    const { name, status } = this.props.user;
    const profile_pic = 'https://unsplash.it/100/100';

    const first_name = name.split(" ")[0];

    return (
      <div className="Empty">
        <h1 className="Empty__name">Welcome, {first_name} </h1>
        <img src={profile_pic} alt={name} className="Empty__img" />
        <p className="Empty__status">
          <b>Status:</b> {status}
        </p>
        <button className="Empty__btn">Start a conversation</button>
        <p className="Empty__info">
          Search for someone to start chatting with or go to Contacts to see who
          is available
        </p>
      </div>
    );
  }
}
