import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { HeadphonesService } from 'src/app/services/headphones.service';
import { AlertService } from 'src/app/services/alert.service';
declare var $: any;

const MODAL_ID = '#new-headphone-modal';

@Component({
  selector: 'new-headphone-btn',
  templateUrl: './new-headphone-btn.component.html',
  styleUrls: ['./new-headphone-btn.component.css']
})
export class NewHeadphoneBtnComponent implements OnInit {

  modelNumber = new FormControl('', [Validators.required, Validators.pattern(/\d/)]);
  weight = new FormControl('', [Validators.required, Validators.pattern(/\d/)]);
  date = new FormControl('', Validators.required);
  asin = new FormControl('', Validators.required);
  batteriesType = new FormControl('', Validators.required);
  productDimensions = new FormControl('', Validators.required);
  manufacturer = new FormControl('', Validators.required);

  constructor(
    private readonly hService: HeadphonesService,
    private readonly alertService: AlertService
  ) { }

  ngOnInit(): void {
  }

  open(): void {
    $(MODAL_ID).modal({
      keyboard: false,
      backdrop: false
    });
  }

  save() {
    if (this.modelNumber.valid && this.weight.valid && this.date.valid &&
      this.asin.valid && this.batteriesType.valid && this.productDimensions.valid &&
      this.manufacturer.valid) {

      this.hService.create({
        item_model_number: this.modelNumber.value,
        asin: this.asin.value,
        batteries_type: this.batteriesType.value,
        date_first_available: this.date.value,
        item_weight: this.weight.value,
        manufacturer: this.manufacturer.value,
        product_dimensions: this.productDimensions.value,
      })
        .subscribe((response: any) => {

          this.alertService.toast('Haedphone saved!');
          this.closeModal();

        }, (err) => {
          this.alertService.message('Error', 'Error saving headphone', 'error');
          console.log(err);
        });
    }
  }

  closeModal(): void {
    $(MODAL_ID).modal('hide');
    this.modelNumber.setValue('');
    this.weight.setValue('');
    this.date.setValue('');
    this.asin.setValue('');
    this.batteriesType.setValue('');
    this.productDimensions.setValue('');
    this.manufacturer.setValue('');

    this.modelNumber.reset();
    this.weight.reset();
    this.date.reset();
    this.asin.reset();
    this.batteriesType.reset();
    this.productDimensions.reset();
    this.manufacturer.reset();
  }

}
