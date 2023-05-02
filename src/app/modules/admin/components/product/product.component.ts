import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { productdata } from '../../productmodel';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

constructor(private api:ApiService,private router:Router){}

  adddata(data:productdata){
   //console.log(data)
   this.api.addproduct(data).subscribe((result)=>{
     console.log(result);
     this.router.navigate(['./viewproduct'])
   })
  }
}
