import { combineReducers } from "redux";
import user from "./userReducer";
import contacts from "./contactsReducer";
import activeUserId from "./activeUserId";

export default combineReducers({
  user,
  contacts,
  activeUserId
});
