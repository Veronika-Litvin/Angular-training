import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Output() toggleItemEvent = new EventEmitter();
  @Input() isFavorite!: boolean;

  addToFavorits() {
    this.toggleItemEvent.emit();
  }
}
