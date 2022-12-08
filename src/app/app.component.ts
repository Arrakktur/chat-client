import {Component, OnInit} from '@angular/core';
import {AuthService} from "./services/auth.service";
import {BehaviorSubject, Observable} from "rxjs";
import {Router} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  loadingInProcess: BehaviorSubject<false> = new BehaviorSubject<false>(false);
  constructor(private authService: AuthService, private router: Router, private location: Location) {}
  ngOnInit(){}
}
