import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PathService {
  private apiUrl = 'http://localhost:8080/api/routes/shortest';

  constructor(private http: HttpClient) { }

  getShortestPath(source: string, destination: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?source=${source}&destination=${destination}`);
  }
}
