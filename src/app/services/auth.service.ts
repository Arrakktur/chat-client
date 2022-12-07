import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from "rxjs";
import { RequestService } from "./request.service";
import { LoginUserDto } from "../dto/user/login-user.dto";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLoggin: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  public token!: string;
  constructor(private requestService: RequestService, private router: Router) {}

  /**
   * Проверка корректный ли jwt
   */
  checkJWT(): Observable<boolean> {
    const token = localStorage.getItem('token');
    if (token) {
      return this.requestService.checkJwt({jwt: token});
    }
    return of(false);
  }

  /**
   * Авторизация
   * @param {LoginUserDto} dto Доступы пользователя
   */
  login(dto: LoginUserDto): Observable<any> {
    const obs = this.requestService.login$(dto);
    obs.subscribe((data) => {
      if (data) {
        this.router.navigateByUrl('chats');
        localStorage.setItem('token', data);
      }
    });
    return obs;
  }

  /**
   * Удаление токена
   */
  logout(): void {
    this.router.navigateByUrl('auth/sign-in');
    localStorage.removeItem('token')
  }
}
