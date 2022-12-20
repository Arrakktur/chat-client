import { IChat } from "../../interfaces/chat.interface";

export interface IChatState {
  chats: IChat[];
}

export const initialChatState: IChatState = {
  chats: [],
}

