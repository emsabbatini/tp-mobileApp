import { Component, ViewChild } from '@angular/core';
import { Nav, NavParams } from 'ionic-angular';

import { HomePage } from '../../pages/home/home';
import { ProfilePage } from '../../pages/profile/profile';
import { MyTeamsPage } from '../../pages/teams/my-teams/my-teams';
import { PlayersPage } from '../../pages/players/players';
import { TournamentsPage } from '../../pages/tournaments/tournaments';

@Component({
  selector: 'main-component',
  templateUrl: 'main.html'
})
export class MainComponent {
  @ViewChild('content') nav: Nav;

  user: any;
  rootPage: any = HomePage;
  pages: Array<{title: string, component: any, icon: string}>;

  constructor(private navParams: NavParams) {
    this.user = this.navParams.data;
    this.pages = [
      { title: 'Home', component: HomePage, icon: 'home' },
      { title: 'Mi Perfil', component: ProfilePage, icon: 'person' },
      { title: 'Mis Equipos', component: MyTeamsPage, icon: 'people' },
      { title: 'Buscar Jugadores', component: PlayersPage, icon: 'football' },
      { title: 'Buscar Torneos', component: TournamentsPage, icon: 'locate' },
    ];
  }

  openPage(page) {
    if (page.title == 'Home') this.nav.setRoot(page.component, this.navParams.data);
    else {
      let params: any = {
        user: this.navParams.data
      }
      if (page.title == 'Mi Perfil') params.view = 'self';
      this.nav.push(page.component, params);
    }
  }
}