import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginComponent } from "../components/login/login.component";
import { LoginService } from "../components/login/login.service";
import { MainComponent } from "../components/main/main.component";


@Component({
  templateUrl: 'app.html',
  providers: [LoginService]
})

export class MyApp {
  @ViewChild('baseNav') nav: Nav;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public loginSvc: LoginService) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.startApp();
    });
  }

  startApp() {
    let componentStack: Array<any> = [];
    componentStack.push({ page: MainComponent });

    if (this.platform.is('cordova')) {
      this.loginSvc.isLoggedIn()
      .then(res => {
        if (!res) {
          componentStack.push({ page: LoginComponent });
        }
        this.nav.insertPages(0, componentStack, { animate: false });        
      })
      .catch(err => console.log(err));
    } else {
      componentStack.push({ page: LoginComponent });
      this.nav.insertPages(0, componentStack, { animate: false });
    }
  }
}

