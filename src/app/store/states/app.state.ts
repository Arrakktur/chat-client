import { initialChatState } from "./chat.state";
import { IAppState } from "../../interfaces/app.interface";

export const initialAppState: IAppState = {
  chats: initialChatState,
}
