import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from "rxjs";
import { RequestService } from "./request.service";
import { LoginUserDto } from "../dto/user/login-user.dto";
import {Router} from "@angular/router";
import {CreateUserDto} from "../dto/user/create-user.dto";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public token!: string;
  constructor(private requestService: RequestService, private router: Router) {}

  /**
   * Проверка корректный ли jwt
   */
  checkJWT(): Observable<boolean> {
    const token = localStorage.getItem('token');
    if (token) {
      return this.requestService.checkJwt$({jwt: token});
    }
    return of(false);
  }

  /**
   * Регистрация пользователя
   * @param {CreateUserDto} dto Параметры пользователя
   */
  signUp(dto: CreateUserDto): Observable<any> {
    return this.requestService.signUp$(dto);
  }

  /**
   * Авторизация пользователя
   * @param {LoginUserDto} dto Параметры пользователя
   */
  signIn(dto: LoginUserDto): Observable<any> {
    const obs = this.requestService.signIn$(dto);
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
