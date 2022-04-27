import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'
const option={
  headers:new HttpHeaders({responseType:'text/html'})
}
@Injectable({
  providedIn: 'root'
})
export class FaceApiService {

  constructor(private http:HttpClient) { }


  webcall(params:any):Observable<any>{
    return this.http.get(`http://localhost:3000/${params.value}`,option).pipe(map((response: any) => {
      return response;
    }));
  }


}
