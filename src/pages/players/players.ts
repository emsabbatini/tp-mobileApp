import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfileService } from '../profile/profile.service';
import { UtilsService } from './../../services/utils.service';

@Component({
  selector: 'page-players',
  templateUrl: 'players.html',
  providers: [ProfileService]
})
export class PlayersPage {

    players: Array<any> = [];
    playersBK: Array<any> = [];

    constructor(public navCtrl: NavController, private profileSvc: ProfileService, private utilsSvc: UtilsService) {

    }

    ngOnInit(): void {
        this.profileSvc.getAll()
        .then(res => {
            this.players = res.data;
            this.playersBK = this.players;
        });
    } 

    getPlayers(ev: any): void {            
        let val = ev.target.value;
        if (val && val.trim() != '') {
            this.players = this.playersBK.filter((item) => {
                return (item.firstname.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    }
}