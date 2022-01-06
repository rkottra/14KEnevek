import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http: HttpClient) { }

  getNames():Observable<string[]> {
    return this.http.get<string[]>("http://localhost:4200/assets/generated.json");
  }
}
