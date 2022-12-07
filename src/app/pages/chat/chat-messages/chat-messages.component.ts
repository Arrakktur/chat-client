import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-chat-messages',
  templateUrl: './chat-messages.component.html',
  styleUrls: ['./chat-messages.component.scss']
})
export class ChatMessagesComponent implements OnInit {

  titleChat = 'Название чата';
  messages = [
    {
      text: 'Первое сообщение',
      thisMessage: true,
      avatar: 'https://cdn4.iconfinder.com/data/icons/business-and-office-circle-flat-vol-4/100/chat__comment__message__user__avatar-512.png'
    },
    {
      text: 'Второе сообщение',
      thisMessage: false,
      author: 'Автор сообщения',
      avatar: 'https://cdn4.iconfinder.com/data/icons/business-and-office-circle-flat-vol-4/100/chat__comment__message__user__avatar-512.png'
    },
    {
      text: 'Третье сообщение',
      thisMessage: false,
      author: 'Автор сообщения',
      avatar: 'https://cdn4.iconfinder.com/data/icons/business-and-office-circle-flat-vol-4/100/chat__comment__message__user__avatar-512.png'
    }
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
