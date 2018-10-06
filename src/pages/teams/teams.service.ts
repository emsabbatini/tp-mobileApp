import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TeamsService {

  constructor(private http: Http) { }

  getById(id): Promise<any> {
    return this.http.get("http://localhost:5000/api/teams/get/" + id)
    .toPromise()
    .then(res => {
      return res.json().data;
    });
  }

} 