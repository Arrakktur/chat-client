import {Injectable, OnInit} from '@angular/core';
import {RequestService} from "./request.service";
import {IChat} from "../pages/chat/chat-list/chat-list.component";

@Injectable({
  providedIn: 'root'
})
export class ChatService implements OnInit {
  private _chats: IChat[] = [];
  constructor(private requestService: RequestService) {}

  ngOnInit() {
    this.requestService.getChatList$().subscribe((data) => {
      this._chats = data;
    })
  }

  get chats (){
    return this._chats;
  }

  set chats (chat: IChat[]){
    this._chats = chat;
  }
}
