import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProfileService } from './profile.service'

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
  providers: [ProfileService]
})
export class ProfilePage {

  profile: any = {};
  profileBK: any = {};
  isEditable: boolean = false;
  isEditing: boolean = false;

  constructor(private navCtrl: NavController, 
              private navParams: NavParams, 
              private profileSvc: ProfileService) {
    this.isEditable = this.navParams.data.view == "self" ? true : false;     
  }

  ngOnInit(): void {
    this.profileSvc.getById(this.navParams.data.user.profiles_id)
    .then(res => {
      this.profile = res.data;
      this.profileBK = res.data;
    });
  }

  onClickAction(): void {
    if (this.isEditing) this.profile = this.profileBK;
    this.isEditing = !this.isEditing;
  }

  onClickSave(): void {
    this.profileSvc.update(this.profile)
    .then(res => {
      this.isEditing = !this.isEditing;
      this.ngOnInit();
    });
  }
}
