import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ChatComponent} from "./pages/chat/chat.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {AuthComponent} from "./pages/auth/auth.component";
import {SignInComponent} from "./pages/auth/sign-in/sign-in.component";
import {SignUpComponent} from "./pages/auth/sign-up/sign-up.component";
import {AuthModule} from "./pages/auth/auth.module";
import {AuthGuard} from "./guards/auth.guard";
import {NotPermissionComponent} from "./pages/not-permission/not-permission.component";

const routes: Routes = [
  {
    path: 'chats',
    loadChildren: () => import('./pages/chat/chat.module').then((m) => m.ChatModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'auth',
    component: AuthModule,
    loadChildren: () => import('./pages/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '403',
    component: NotPermissionComponent,
  },
  {
    path: '404',
    component: NotFoundComponent,
  },
  {
    path: '',
    redirectTo: 'chats',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '404',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
