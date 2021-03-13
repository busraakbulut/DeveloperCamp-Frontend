import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product = { productId: 1, productName: "Bardak", categoryID: 1, unitPrice: 5 };
  product2 = { productId: 2, productName: "Laptop", categoryID: 1, unitPrice: 5 };
  product3 = { productId: 3, productName: "Mouse", categoryID: 1, unitPrice: 5 };
  product4 = { productId: 4, productName: "Keyboard", categoryID: 1, unitPrice: 5 };
  product5 = { productId: 5, productName: "Camera", categoryID: 1, unitPrice: 5 };
  products = [this.product, this.product2, this.product3, this.product4, this.product5]
  constructor() { }

  ngOnInit(): void {
  }

}
