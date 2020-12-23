import {
  SEND_MESSAGE,
  SET_ACTIVE_USER_ID,
  SET_TYPING_VALUE,
} from "./constants/action-types";

export const setActiveUserId = (id: any) => ({
  type: SET_ACTIVE_USER_ID,
  payload: id,
});

export const setTypingValue = (value: any) => ({
  type: SET_TYPING_VALUE,
  payload: value,
});

export const sendMessage = (message: any, userId: any, num?: any) => ({
  type: SEND_MESSAGE,
  payload: {
    message,
    userId,
    num
  },
});
