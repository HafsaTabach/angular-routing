import { Injectable } from '@angular/core';
import{ HttpClient} from '@angular/common/http';
import{ productdata} from '../app/modules/admin/productmodel'
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
addproduct(data:productdata){
  return this.http.post("http://localhost:3000/product",data)
}
}

