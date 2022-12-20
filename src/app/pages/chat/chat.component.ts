import { Component, OnInit } from '@angular/core';
import {RequestService} from "../../services/request.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  constructor(private requestService: RequestService) { }

  ngOnInit(): void {
    this.requestService.getChatList$().subscribe((data) => {
      console.log(data);
    });
  }

}
