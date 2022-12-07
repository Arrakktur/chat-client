import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ChatComponent} from "./chat.component";
import {AuthGuard} from "../../guards/auth.guard";

const routes: Routes = [
  {
    path: 'chats',
    component: ChatComponent,
    canActivate: [AuthGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ChatRoutingModule {
}
