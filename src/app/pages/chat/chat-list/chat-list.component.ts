import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import {RequestService} from "../../../services/request.service";
import {User} from "../../../dto/user/user.dto";
import {ChatService} from "../../../services/chat.service";

export interface IChat {
  avatar: string;
  title: string;
  lastMessage: string;
  active?: boolean;
}

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss']
})
export class ChatListComponent implements OnInit {

  chats: IChat[] = [];

  searchValue?: string;
  isOpenSearchWindow: boolean = false;
  searchUsersData?: User[];
  isOpen = true;

  constructor(private authService: AuthService, private requestService: RequestService, private chatService: ChatService) {
  }

  ngOnInit(): void {
    this.requestService.getChatList$().subscribe(
      (data) => {
        this.chats = data;
        this.chatService.chats = data;
      }
    )
  }

  logout() {
    this.authService.logout();
  }

  selectUser(login: string) {
    this.isOpenSearchWindow = false;
    this.chats.push({
      avatar: 'https://cdn4.iconfinder.com/data/icons/business-and-office-circle-flat-vol-4/100/chat__comment__message__user__avatar-512.png',
      title: login,
      lastMessage: 'Пока нет сообщений',
      active: true,
    })
  }

  searchUsers() {
    if (this.searchValue) {
      this.requestService.getUserList$(this.searchValue).subscribe((data) => {
        this.isOpenSearchWindow = true;
        this.searchUsersData = data;
      });
    } else {
      this.isOpenSearchWindow = false;
    }
  }

  changeActiveChat(chat: IChat){
    this.chats.forEach((chatItem) => {
      chat === chatItem ? chatItem.active = true : chatItem.active = false;
    })
  }

  changeStateOpen() {
    this.isOpen = !this.isOpen;
  }
}
