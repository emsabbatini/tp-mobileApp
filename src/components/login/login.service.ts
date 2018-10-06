import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { NativeStorage } from '@ionic-native/native-storage';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService {

  constructor(private http: Http, private nativeStorage: NativeStorage) {

  }

  login(obj) : Promise<any> {
    return this.http.get("http://localhost:5000/api/auth/login?user=" + obj.user + "&password=" + obj.password)
    .toPromise()
    .then(res => {
      let response = res.json();
      response.success = response.code === 'OK' ? true : false;
      if (response.success) this.nativeStorage.setItem('user', response.user);
      this.nativeStorage.setItem('isLoggedIn', response.success);
      return response;
    })
    .catch(err => console.error(err));
  }

  isLoggedIn(): Promise<boolean> {
    return this.nativeStorage.getItem('isLoggedIn')
    .then(data => {
      return data;
    })
    .catch(err => console.error(err));
  }

}