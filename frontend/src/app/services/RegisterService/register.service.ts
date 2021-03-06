import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  submitRegister(input:object): Observable<any> {
    return this.http.post<any>(environment.backendRoute + '/register' , input);
  }

}
