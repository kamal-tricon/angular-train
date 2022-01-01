import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) { }

  formGroup: FormGroup;
  errorMessage = '';


  ngOnInit(): void {
    this.formGroup = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get username() { return this.formGroup.get('username'); }
  get password() { return this.formGroup.get('password'); }

  login() {
    console.log(this.formGroup.get('username').value);
    const request = {
      username: this.formGroup.get('username').value,
      password: this.formGroup.get('password').value
    };

    this.loginService.login(request).subscribe((data: any) => {
      this.errorMessage = data.error;
      if (!this.errorMessage) {
        this.router.navigate(['/dashboard']);
        sessionStorage.setItem('authorize', 'true');
      } else {
        sessionStorage.setItem('authorize', 'false');
      }
    });
  }

  ngOnDestroy(): void {
    console.log('GOing out');
  }

}
