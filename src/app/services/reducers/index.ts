import { combineReducers } from "redux";
import user from "./userReducer";
import contacts from "./contactsReducer";
import activeUserId from "./activeUserId";
import messages from "./messages";
import typing from "./typing";

export default combineReducers({
  user,
  messages,
  typing,
  contacts,
  activeUserId
});
