import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-textbox-component',
  templateUrl: './textbox-component.component.html',
  styleUrl: './textbox-component.component.css',
})
export class TextboxComponentComponent implements OnInit {
  @Output() cardData = new EventEmitter<any>(); // Event emitter to send card data

  nom: string = "";
  prenom: string = "";
  description: string = "";

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit() {
    const cardInfo = {
      nom: this.nom,
      prenom: this.prenom,
      description: this.description
    };
    this.cardData.emit(cardInfo); // Emit card information on button click
  }
}
