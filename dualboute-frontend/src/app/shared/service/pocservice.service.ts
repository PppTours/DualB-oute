import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PocService {
  private API_URL = 'http://localhost:8000/api';
  protected ENDPOINT = 'partie-du-corps/';

  constructor(private httpClient: HttpClient) { }

  public getAll(): Observable<any> {
    return this.httpClient.get(`${this.API_URL}/${this.ENDPOINT}`);
  }
}
