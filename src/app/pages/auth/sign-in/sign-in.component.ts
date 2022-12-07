import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../services/auth.service";
import {LoginUserDto} from "../../../dto/user/login-user.dto";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  public loginForm!: FormGroup;
  loading: boolean = false;
  errorMessage: string | null = null;
  hide = true;
  constructor(private formBuilder: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      login: [null, [Validators.required]],
      password: [null, Validators.required]
    });
  }

  submit() {
    this.loading = true;
    if (!this.loginForm.valid) {
      this.loading = false;
      return;
    }
    const loginUserDto: LoginUserDto = {
      login: String(this.loginForm.get('login')?.value),
      password: String(this.loginForm.get('password')?.value),
    }
    this.authService.login(loginUserDto).subscribe((data) => {
      this.errorMessage = null;
      this.loading = false;
      if (!data){
        this.errorMessage = 'Не правильный логин или пароль';
      }
    });
  }
}
