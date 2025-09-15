import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import productDetails from '../../../products.json';

@Component({
  selector: 'app-product-details',
  imports: [RouterModule, CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  productId : number | null = null;
  product : any = null;
  productList = productDetails;
  constructor(private route: ActivatedRoute){}

  ngOnInit(){
    this.productId = Number(this.route.snapshot.paramMap.get('id'))
    this.product = this.productList.find(p => p.id === this.productId)
  }
}
