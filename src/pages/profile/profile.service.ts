import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProfileService {

  constructor(private http: Http) { }

  getById(id): Promise<any> {
    return this.http.get("http://localhost:5000/api/profile/get/" + id)
    .toPromise()
    .then(res => {
      return res.json();
    });
  }

  getAll(): Promise<any> {
    return this.http.get("http://localhost:5000/api/profile/get")
    .toPromise()
    .then(res => {
      return res.json();
    });
  }

  update(obj): Promise<any> {
    return this.http.put("http://localhost:5000/api/profile/update", obj)
    .toPromise()
    .then(res => {
      return res.json();
    });
  }

} 