import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NativeStorage } from '@ionic-native/native-storage';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LoginModule } from '../components/login/login.module';
import { MainComponent } from '../components/main/main.component';
import { HomePage } from '../pages/home/home';
import { ProfilePage } from '../pages/profile/profile';
import { MyTeamsPage } from '../pages/teams/my-teams/my-teams';
import { TournamentsPage } from '../pages/tournaments/tournaments';
import { PlayersPage } from '../pages/players/players';

import { UtilsService } from './../services/utils.service';

@NgModule({
  declarations: [
    MyApp,
    MainComponent,
    HomePage,
    ProfilePage,
    MyTeamsPage,
    TournamentsPage,
    PlayersPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    LoginModule,
    HttpModule, FormsModule    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MainComponent,
    HomePage,
    ProfilePage,
    MyTeamsPage,
    TournamentsPage,
    PlayersPage  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    NativeStorage,
    UtilsService
  ]
})
export class AppModule {}
