import _ from "lodash";
import { getMessages } from "../../../static-data";
import { SEND_MESSAGE } from "../actions/constants/action-types";

export default function messages(state: any = getMessages(10), action: any) {
  switch (action.type) {
    case SEND_MESSAGE:
      const { message, userId, num } = action.payload;
      let allUserMsgs: any = {};
      allUserMsgs = state[userId];
      console.log("allUserMsgs : ", allUserMsgs, num);

      if (num) {
        allUserMsgs[num] = {
          num: num,
          text: message,
          is_user_msg: true,
        };
        return {
          ...state,
          [userId]: {
            ...allUserMsgs,
          },
        };
      } else {
        const number = +_.keys(allUserMsgs).pop() + 1;
        console.log({ number });

        return {
          ...state,
          [userId]: {
            ...allUserMsgs,
            [number]: {
              num: number,
              text: message,
              is_user_msg: true,
            },
          },
        };
      }

    default:
      return state;
  }
}
