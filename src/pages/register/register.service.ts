import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class RegisterService {

  constructor(private http: Http) { }

  register(obj): Promise<any> {
    return this.http.post("http://localhost:5000/api/profile/create", obj)
    .toPromise()
    .then(res => {      
      return res.json();
    });
  }

} 