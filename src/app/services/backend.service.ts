import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class BackendService {
  constructor(private httpClient: HttpClient) {}

  //  login_fn(email: string, mot_passe: string) {
  //   const obj={email:email,mot_passe:mot_passe}
  //    return this.httpClient.post("http://127.0.0.1:3000/auth/login",obj);
  //    }
  //    addUser(obj:any){
  //     return this.httpClient.post("http://127.0.0.1:3000/users/add",obj);
  //    }
  get(endpoint: string) {
    return this.httpClient.get(endpoint);
  }

  delete(endpoint: string) {
    return this.httpClient.delete(endpoint);
  }

  post(endpoint: string,object: any, ) {
    return this.httpClient.post(endpoint, object);
  }
  put(endpoint: string,object:any) {
    return this.httpClient.put(endpoint, object);
  }
}
