import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { NavController } from 'ionic-angular';
import { MainComponent } from "../../components/main/main.component";
import { RegisterService } from './register.service';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
  providers: [RegisterService]
})
export class RegisterPage {

  private registerFormGroup : FormGroup;

  constructor(public navCtrl: NavController, private registerSvc: RegisterService, private formBuilder: FormBuilder) {
    this.registerFormGroup = this.formBuilder.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      email: ['', Validators.required],
      user: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  onSubmitRegister(): void {
    this.registerSvc.register(this.registerFormGroup.value)
    .then(res => {
      console.log(res);
      if (res.code == 'OK') this.navCtrl.setRoot(MainComponent, res.data);
    });
  }


}
