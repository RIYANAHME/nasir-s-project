import { Component, OnInit } from '@angular/core';
import { CartService } from '../../servise/cart.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  cartQuantity= 0;

  constructor(cartService:CartService) {
    cartService.getCartObservable().subscribe((newCart) =>{
      this.cartQuantity = newCart.totalCount;
    })
   }

  ngOnInit(): void {
  }

}
