import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
  @Output() headphoneCreated: EventEmitter<boolean> = new EventEmitter();
  modelNumber = new FormControl('', [Validators.required, Validators.pattern(/\d/)]);
  weight = new FormControl('', [Validators.required, Validators.pattern(/\d/)]);
  date = new FormControl('', Validators.required);
  asin = new FormControl('', Validators.required);
  batteiresType = new FormControl('', Validators.required);
  productDimensions = new FormControl('', Validators.required);
  manufacturer = new FormControl('', Validators.required);
  loading: boolean = false;

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
      this.asin.valid && this.batteiresType.valid && this.productDimensions.valid &&
      this.manufacturer.valid) {

      this.loading = true;
      this.hService.create({
        modelNumber: this.modelNumber.value,
        asin: this.asin.value,
        batteiresType: this.batteiresType.value,
        dateFirstAvailable: this.date.value,
        weight: this.weight.value,
        manufacturer: this.manufacturer.value,
        dimensions: this.productDimensions.value,
      })
        .subscribe((response: any) => {

          this.alertService.toast('Haedphone saved!');
          this.closeModal();
          this.headphoneCreated.emit(true);
          this.loading = false;

        }, (err) => {
          this.alertService.message('Error', 'Error saving headphone', 'error');
          console.log(err);
          this.loading = false;
        });
    } else {
      this.alertService.toast('Please fill all required fields', 'warning');
    }
  }

  closeModal(): void {
    $(MODAL_ID).modal('hide');
    this.modelNumber.setValue('');
    this.weight.setValue('');
    this.date.setValue('');
    this.asin.setValue('');
    this.batteiresType.setValue('');
    this.productDimensions.setValue('');
    this.manufacturer.setValue('');

    this.modelNumber.reset();
    this.weight.reset();
    this.date.reset();
    this.asin.reset();
    this.batteiresType.reset();
    this.productDimensions.reset();
    this.manufacturer.reset();
  }

}
