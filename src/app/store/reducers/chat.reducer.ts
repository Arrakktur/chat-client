import {createReducer, on} from "@ngrx/store";
import {initialChatState} from "../states/chat.state";
import {chatActions} from "../actions/chat.actions";

export const chatReducer = createReducer(
  initialChatState,
  on(
    chatActions.getChat, () => initialChatState,
  ),
)
