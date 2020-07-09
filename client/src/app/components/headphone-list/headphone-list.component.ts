import { Component, OnInit } from '@angular/core';
import { Headphone } from 'src/app/models/headphone.model';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'headphone-list',
  templateUrl: './headphone-list.component.html',
  styleUrls: ['./headphone-list.component.css']
})
export class HeadphoneListComponent implements OnInit {
  headphones: Headphone[] = [];
  displayedColumns = ['id', 'item_model_number', 'item_weight', 'date_first_available', 'asin'];
  editingHeadphoneModelNumber = new FormControl('', [Validators.required, Validators.pattern(/\d/)]);
  editingHeadphoneWeight = new FormControl('', Validators.required);
  editingHeadphoneDate = new FormControl('', Validators.required);

  constructor() { }

  list(): Headphone[] {
    return [
      { id: new Date().getTime().toString(), editing: false, asin: '', batteries_type: '', date_first_available: 'None', item_model_number: (Math.random() * 100), item_weight: '12', manufacturer: '', product_dimensions: 'ASD' },
      { id: new Date().getTime().toString(), editing: false, asin: '', batteries_type: '', date_first_available: 'None', item_model_number: (Math.random() * 100), item_weight: '12', manufacturer: '', product_dimensions: 'ASD' },
      { id: new Date().getTime().toString(), editing: false, asin: '', batteries_type: '', date_first_available: 'None', item_model_number: (Math.random() * 100), item_weight: '12', manufacturer: '', product_dimensions: 'ASD' },
      { id: new Date().getTime().toString(), editing: false, asin: '', batteries_type: '', date_first_available: 'None', item_model_number: (Math.random() * 100), item_weight: '12', manufacturer: '', product_dimensions: 'ASD' },
      { id: new Date().getTime().toString(), editing: false, asin: '', batteries_type: '', date_first_available: 'None', item_model_number: (Math.random() * 100), item_weight: '12', manufacturer: '', product_dimensions: 'ASD' },
      { id: new Date().getTime().toString(), editing: false, asin: '', batteries_type: '', date_first_available: 'None', item_model_number: (Math.random() * 100), item_weight: '12', manufacturer: '', product_dimensions: 'ASD' },
      { id: new Date().getTime().toString(), editing: false, asin: '', batteries_type: '', date_first_available: 'None', item_model_number: (Math.random() * 100), item_weight: '12', manufacturer: '', product_dimensions: 'ASD' },
      { id: new Date().getTime().toString(), editing: false, asin: '', batteries_type: '', date_first_available: 'None', item_model_number: (Math.random() * 100), item_weight: '12', manufacturer: '', product_dimensions: 'ASD' },
      { id: new Date().getTime().toString(), editing: false, asin: '', batteries_type: '', date_first_available: 'None', item_model_number: (Math.random() * 100), item_weight: '12', manufacturer: '', product_dimensions: 'ASD' },
      { id: new Date().getTime().toString(), editing: false, asin: '', batteries_type: '', date_first_available: 'None', item_model_number: (Math.random() * 100), item_weight: '12', manufacturer: '', product_dimensions: 'ASD' },
      { id: new Date().getTime().toString(), editing: false, asin: '', batteries_type: '', date_first_available: 'None', item_model_number: (Math.random() * 100), item_weight: '12', manufacturer: '', product_dimensions: 'ASD' },
      { id: new Date().getTime().toString(), editing: false, asin: '', batteries_type: '', date_first_available: 'None', item_model_number: (Math.random() * 100), item_weight: '12', manufacturer: '', product_dimensions: 'ASD' }
    ];
  }

  ngOnInit(): void {
    this.headphones = this.list();
  }

  show(headphone: Headphone): void { }

  edit(headphone: Headphone): void {
    this.headphones.forEach(h => h.editing = false);
    headphone.editing = true;
    this.editingHeadphoneModelNumber.setValue(headphone.item_model_number);
    this.editingHeadphoneWeight.setValue(headphone.item_weight);
    this.editingHeadphoneDate.setValue(headphone.date_first_available);
  }

  delete(headphone: Headphone): void { }

  update(headphone: Headphone): void {
    headphone.item_model_number = this.editingHeadphoneModelNumber.value;
    headphone.item_weight = this.editingHeadphoneWeight.value;
    headphone.date_first_available = this.editingHeadphoneDate.value;
    headphone.editing = false;

  }

  cancelEdit(headphone: Headphone): void {
    headphone.editing = false;
  }
}
