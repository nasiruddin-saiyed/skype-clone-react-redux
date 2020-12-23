import * as React from "react";
import { setActiveUserId } from "../../services/actions";
import store from "../../services/store";
import "./User.css";

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

  handleClick(user_id: any) {
    console.log("Clicked on User : ", user_id);

    store.dispatch(setActiveUserId(user_id));
  }

  public render() {
    const { name, status, user_id } = this.props.user;
    const profile_pic = "https://unsplash.it/100/100";

    return (
      <div className="User" onClick={this.handleClick.bind(this, user_id)}>
        <img src={profile_pic} alt={name} className="User__pic" />
        <div className="User__details">
          <p className="User__details-name">{name}</p>
          <p className="User__details-status">{status}</p>
        </div>
      </div>
    );
  }
}
