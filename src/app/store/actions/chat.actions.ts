import {createActionGroup, emptyProps, props} from "@ngrx/store";
import {IChat} from "../../interfaces/chat.interface";

export const chatActions = createActionGroup({
  source: 'CHAT',
  events: {
    'set chat': props<{ chats: IChat[] }>(),
    'get chat': emptyProps(),
  }
})
