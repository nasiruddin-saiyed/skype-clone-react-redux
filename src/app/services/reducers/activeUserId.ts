import { SET_ACTIVE_USER_ID } from "../actions/constants/action-types";

export default function activeUserId(state = null, action:any) {
  switch (action.type) {
    case SET_ACTIVE_USER_ID:
      return action.payload;
    default:
      return state;
  }
}
