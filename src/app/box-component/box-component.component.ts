import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-box-component',
  templateUrl: './box-component.component.html',
  styleUrl: './box-component.component.css'
})
export class BoxComponentComponent {
  @Input() cardInfo: any; // Receive card data from saisie-carte component
  receiveCardData(cardData: any) {
    // Update the card information with the received data
    this.cardInfo = cardData;

  }
}
