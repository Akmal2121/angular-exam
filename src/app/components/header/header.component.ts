import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  modal_window = false;
  @Input() modal: any;
  @Output() boolEmitter = new EventEmitter<boolean>();
  basket() {
    this.modal_window = true;
  }
  sendModal(value: any) {
    this.boolEmitter.emit(value);
  }
}
