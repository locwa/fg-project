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
  isProductInStock : boolean | null = null
  constructor(private route: ActivatedRoute){}
  buttonStyle: string | null = null
  buttonText: string | null = null

  ngOnInit(){
    this.productId = Number(this.route.snapshot.paramMap.get('id'))
    this.product = this.productList.find(p => p.id === this.productId)
    this.isProductInStock = this.product.quantity === 0 ? false : true;
    this.buttonStyle = this.isProductInStock ? "bg-dark text-light py-2 px-4" : "bg-secondary text-light py-2 px-4"
    this.buttonText = this.isProductInStock ? "Add To Cart" : "Out Of Stock"
  }
}
