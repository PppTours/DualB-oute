import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private API_URL = 'http://localhost:8000/api';
  protected ENDPOINT = '';

  constructor(private httpClient: HttpClient) { }

  public getAll() {
    return this.httpClient.get(`${this.API_URL}/${this.ENDPOINT}`);
  }

  public getById(id: number) {
    return this.httpClient.get(`${this.API_URL}/${this.ENDPOINT}/${id}`);
  }

  public create(data: any) {
    return this.httpClient.post(`${this.API_URL}/${this.ENDPOINT}`, data);
  }

  public update(id: number, data: any) {
    return this.httpClient.put(`${this.API_URL}/${this.ENDPOINT}/${id}`, data);
  }

  public delete(id: number) {
    return this.httpClient.delete(`${this.API_URL}/${this.ENDPOINT}/${id}`);
  }
}
