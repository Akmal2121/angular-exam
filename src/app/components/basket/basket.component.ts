import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css'],
})
export class BasketComponent {
  @Input() modal_wind: any;
  @Input() set: any;
  @Output() modalView = new EventEmitter<boolean>();
  @Output() plusEmitter = new EventEmitter<object>();
  @Output() minusEmitter = new EventEmitter<object>();
  count: any;
  cancel(value: any) {
    this.modalView.emit(!value);
    this.set.clear();
  }
  sum = 0;
  send() {
    for (const iterator of this.set) {
      this.sum += iterator.price * iterator.count;
    }
    alert(`Заказ Оформлен!
Общая сумма ${this.sum}$
    `);
    this.sum = 0;
  }
  plus(item: any) {
    item.count += 1;
    this.plusEmitter.emit(item);
  }
  minus(item: any) {
    if (item.count != 0) {
      item.count -= 1;
    }

    this.minusEmitter.emit(item);
  }
}
