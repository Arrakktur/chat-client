import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {RequestService} from "./request.service";

@Injectable({
  providedIn: 'root'
})
export class LoadingService implements OnInit {
  loading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  // список обязательных запросов
  requestList: Observable<any>[] = [];
  constructor(private requestService: RequestService) {}

  get loading(): boolean{
    return this.loading$.getValue();
  }

  set loading(value: boolean){
    this.loading$.next(value);
  }

  ngOnInit() {}
}
