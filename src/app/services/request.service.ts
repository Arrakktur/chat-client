import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable, of} from "rxjs";
import {LoginUserDto} from "../dto/user/login-user.dto";
import {CheckJwtDto} from "../dto/user/check-jwt.dto";

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  checkJwt(params: CheckJwtDto): Observable<any>{
    return this.doPostRequest('checkJwt', params);
  }

  login$(params: LoginUserDto): Observable<any>{
    return this.doPostRequest('signIn', params);
  }

  doPostRequest(action: string, params: any): Observable<any>{
    return this.http.post<any>(`${environment.apiUrl}/${action}`,
      params);
  }

  doGetRequest(action: string, params: any): Observable<any>{
    return this.http.get<any>(`${environment.apiUrl}/${action}`,
      params);
  }
}
