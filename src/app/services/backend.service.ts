import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class BackendService {
  constructor(private httpClient: HttpClient) {}

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
