import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable()
export class WebService {
    constructor(private http : HttpClient){
    }

    getMessages() {
        //  return this.http.get('https://localhost:44364/api/messages').toPromise();
       //return this.http.get('https://finplanning.co.in/api/messages').toPromise();
    }
}