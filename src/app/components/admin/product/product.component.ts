import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {


  jellyStock: any;
  cupCake: any;
  biscutPudding: any;
  biscuitPudding: any;

  products = [
    {
      name: 'Wattalappam',
      image: 'https://www.tripsavvy.com/thmb/FextG-2Sjj50uq_yVP1ISGNsyKo=/960x628/filters:no_upscale():max_bytes(150000):strip_icc()/23905661_1185812198187406_203758300408863174_n-7009442ffb6749aca07496d80ed3ed95.jpg'
    },
    {
      name: 'Jelly Pudding',
      image: 'https://www.cookingwithnanaling.com/wp-content/uploads/2023/09/broken-glass-jelly-recipe-1.jpg'
    },
    {
      name: 'Biscuit Pudding',
      image: 'https://lonumedhu.com/sites/default/files/ChocolateBisuitPudding1.jpg'
    },
    {
      name: 'Cupcake',
      image: 'https://www.tfcakes.in/images/products/210111_020233_646_461.jpg'
    }
  ];

  showWattalappam = false;
  showJellyPudding = false;
  showBiscuitPudding = false;
  showCupcake = false;

  openManage(productName: string) {
    this.closeManage();
    switch (productName) {
      case 'Wattalappam':
        this.showWattalappam = true;
        break;
      case 'Jelly Pudding':
        this.showJellyPudding = true;
        break;
      case 'Biscuit Pudding':
        this.showBiscuitPudding = true;
        break;
      case 'Cupcake':
        this.showCupcake = true;
        break;
    }
  }

  closeManage() {
    this.showWattalappam = false;
    this.showJellyPudding = false;
    this.showBiscuitPudding = false;
    this.showCupcake = false;
  }

}
