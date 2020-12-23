import * as React from "react";
import './User.css';

export interface IUserProps {
  user: any;
  key: any;
}

export interface IUserState {}

export default class User extends React.Component<IUserProps, IUserState> {
  constructor(props: IUserProps) {
    super(props);

    this.state = {};
  }

  public render() {
    const { name, status } = this.props.user;
    const profile_pic = 'https://unsplash.it/100/100';

    return (
      <div className="User">
        <img src={profile_pic} alt={name} className="User__pic" />
        <div className="User__details">
          <p className="User__details-name">{name}</p>
          <p className="User__details-status">{status}</p>
        </div>
      </div>
    );
  }
}
