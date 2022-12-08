import {NgModule} from "@angular/core";
import {ChatComponent} from "./chat.component";
import {ChatProfileComponent} from "./chat-profile/chat-profile.component";
import {ChatListComponent} from "./chat-list/chat-list.component";
import {ChatMessagesComponent} from "./chat-messages/chat-messages.component";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {ChatRoutingModule} from "./chat-routing.module";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  declarations: [
    ChatComponent,
    ChatProfileComponent,
    ChatListComponent,
    ChatMessagesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    ChatRoutingModule,
  ]
})
export class ChatModule{}
