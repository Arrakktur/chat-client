import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../services/auth.service";
import {CreateUserDto} from "../../../dto/user/create-user.dto";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  public regForm!: FormGroup;
  loading: boolean = false;
  errorMessage: string | null = null;
  hide = true;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    this.regForm = this.formBuilder.group({
      login: [null, Validators.required],
      name: [null, Validators.required],
      password: [null, [Validators.required, Validators.minLength(8)]],
      replayPassword: [null, [Validators.required, Validators.minLength(8)]]
    });
  }

  navigate(link: string): void{
    this.router.navigateByUrl(link);
  }

  submit() {
    this.loading = true;
    if (!this.regForm.valid) {
      this.loading = false;
      return;
    }
    const regUserDto: CreateUserDto = {
      login: String(this.regForm.get('login')?.value),
      name: String(this.regForm.get('name')?.value),
      password: String(this.regForm.get('password')?.value),
    }
    this.authService.signUp(regUserDto).subscribe((data) => {
      this.errorMessage = null;
      this.loading = false;
      if (!data) {
        this.errorMessage = 'Неизвестная ошибка при регистрации';
      }
    });
  }
}
