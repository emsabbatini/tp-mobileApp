import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { LoginService } from "./login.service";
import { NavController } from "ionic-angular";
import { RegisterPage } from '../../pages/register/register';
import { MainComponent } from '../main/main.component';

@Component({
  templateUrl: 'login.html',
  selector: 'login-component'

})
export class LoginComponent {

  private loginFormGroup : FormGroup;

  constructor(private loginService: LoginService, private nav: NavController, private formBuilder: FormBuilder) {
    this.loginFormGroup = this.formBuilder.group({
      user: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  onSubmitLogin() : void {
    this.loginService.login(this.loginFormGroup.value)
    .then(success => {
      console.log(success);
      if (success.success) this.nav.setRoot(MainComponent, success.user)
    })    
  }

  onClickRegister() : void {
    this.nav.push(RegisterPage);
  }
}