import { Component } from '@angular/core';

@Component({
  selector: 'app-all-cat',
  templateUrl: './allCat.component.html',
  styleUrls: ['./allCat.component.css'],
})
export class AllCatComponent {
  set: any = new Set();
  modal: boolean = false;
  korzina(item: any) {
    this.set.add(item);
    this.modal = true;
  }
  modal_wind = false;
  modalView(value: any) {
    this.modal_wind = value;
    this.modal = value;
  }
  boolEmitter(value: any) {
    this.modal_wind = value;
  }
  plusEmitter(item: any) {
    this.set.add(item);
  }
  minusEmitter(item: any) {
    this.set.add(item);
  }

  array = [
    {
      name: 'Iphone 14',
      price: 300,
      count: 1,
      id: 1,
      char: '256GB',
      image: '../../../assets/iphone14.jpg',
    },
    {
      name: 'Iphone 13',
      price: 200,
      count: 1,
      char: '128GB',
      id: 2,
      image: '../../../assets/iphone13.jpg',
    },
    {
      name: 'Iphone 14 PRO MAX',
      price: 400,
      count: 1,
      char: '256GB',
      id: 3,
      image: '../../../assets/iphone.jpg',
    },
    {
      name: 'Iphone 11 PRO MAX',
      price: 200,
      char: '64GB',
      count: 1,
      id: 4,
      image: '../../../assets/iphone11.png',
    },
    {
      name: 'Samsung XR',
      price: 500,
      count: 1,
      char: '528GB',
      id: 5,
      image: '../../../assets/samsung.png',
    },
    {
      name: 'Samsung SR',
      price: 550,
      count: 1,
      char: '32GB',
      id: 6,
      image: '../../../assets/smasung.jpg',
    },
    {
      name: 'XIAOMI',
      price: 250,
      count: 1,
      id: 7,
      char: '256GB',
      image: '../../../assets/xiaomi.jpg',
    },
    {
      name: 'XIAOMI 22S',
      price: 450,
      count: 1,
      char: '256GB',
      id: 8,
      image: '../../../assets/xiaomi1.jpg',
    },
  ];
}
