import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable, of} from "rxjs";
import {LoginUserDto} from "../dto/user/login-user.dto";
import {CheckJwtDto} from "../dto/user/check-jwt.dto";
import {CreateUserDto} from "../dto/user/create-user.dto";

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) {
  }

  getChatList$(): Observable<any> {
    return this.doGetRequest('chats');
  }

  getUserList$(login: string): Observable<any> {
    return this.doGetRequest(`users/${login}`);
  }

  getAllUsers$(): Observable<any> {
    return this.doGetRequest('getAllUsers');
  }

  checkJwt$(params: CheckJwtDto): Observable<any> {
    return this.doPostRequest('checkJwt', params);
  }

  signUp$(params: CreateUserDto): Observable<any> {
    return this.doPostRequest('signUp', params);
  }

  signIn$(params: LoginUserDto): Observable<any> {
    return this.doPostRequest('signIn', params);
  }

  private doPostRequest(action: string, params?: any): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/${action}`,
      params);
  }

  private doGetRequest(action: string, params?: any): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/${action}`,
      params);
  }
}
