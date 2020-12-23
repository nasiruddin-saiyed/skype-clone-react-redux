import { combineReducers } from "redux";
import user from "./userReducer";
import contacts from "./contactsReducer";
import activeUserId from "./activeUserId";
import messages from "./messages";

export default combineReducers({
  user,
  messages,
  contacts,
  activeUserId
});
