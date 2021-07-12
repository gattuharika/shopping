import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input()
  cartCount: number = 0;

  cartItemVsItems() {
    return this.cartCount > 1 ? 'item' : 'item';
  }
  constructor() {}

  ngOnInit() {}
}
