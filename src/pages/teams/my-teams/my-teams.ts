import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TeamsService } from '../teams.service';

@Component({
  selector: 'page-my-teams',
  templateUrl: 'my-teams.html',
  providers: [TeamsService]
})
export class MyTeamsPage {

  teams: Array<any> = [];
  constructor(private navCtrl: NavController, 
              private teamsSvc: TeamsService,
              private navParams: NavParams) {
  }

  ngOnInit(): void {
    this.teamsSvc.getById(this.navParams.data.user.id)
    .then(res =>{
      this.teams = res;
    });
  }

}
