import {RouterReducerState} from "@ngrx/router-store";
import {IChatState} from "../store/states/chat.state";

export interface IAppState {
  router?: RouterReducerState;
  chats: IChatState;
}
