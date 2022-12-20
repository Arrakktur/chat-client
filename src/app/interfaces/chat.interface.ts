import { IMessage } from "./message.interface";

export interface IChat {
  messages: IMessage[];
  name: string;
}
