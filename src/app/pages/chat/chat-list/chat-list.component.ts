import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss']
})
export class ChatListComponent implements OnInit {

  chats = [
    {
      title: 'Название чата 1',
      lastMessage: 'lastMessage',
      avatar: 'https://cdn4.iconfinder.com/data/icons/business-and-office-circle-flat-vol-4/100/chat__comment__message__user__avatar-512.png',
    },
    {
      title: 'Название чата 2',
      lastMessage: 'lastMessage',
      avatar: 'https://cdn4.iconfinder.com/data/icons/business-and-office-circle-flat-vol-4/100/chat__comment__message__user__avatar-512.png',
    }
  ];
  searchValue?: string;
  isOpen = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
  }

  logout(){
    this.authService.logout();
  }

  changeStateOpen(){
    this.isOpen = !this.isOpen;
  }
}
