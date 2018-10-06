import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { LoginComponent } from "./login.component";
import { RegisterPage } from '../../pages/register/register';

@NgModule({
  imports: [IonicModule],
  declarations: [LoginComponent, RegisterPage],
  entryComponents: [LoginComponent, RegisterPage],
})
export class LoginModule {}