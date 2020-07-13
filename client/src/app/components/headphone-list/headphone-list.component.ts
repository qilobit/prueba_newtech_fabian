import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Headphone } from 'src/app/models/headphone.model';
import { FormControl, Validators } from '@angular/forms';
import { HeadphonesService } from 'src/app/services/headphones.service';
import { AlertService } from 'src/app/services/alert.service';
import { formatDate, editingDate } from "src/app/utils/date";

declare var $: any;
const READONLY_MODAL_REF = "#show-headphone-modal";
@Component({
  selector: 'headphone-list',
  templateUrl: './headphone-list.component.html',
  styleUrls: ['./headphone-list.component.css']
})
export class HeadphoneListComponent implements OnInit {
  @Input() headphones: Headphone[] = [];
  @Output() headphoneAffected: EventEmitter<boolean> = new EventEmitter();
  currentShowingHeadphones: Headphone[] = [];

  paginationData: PaginationData = {
    currentPage: 1,
    itemsPerPage: 10,
    totalItems: 0
  };
  currentHeadphone: Headphone;
  editingHeadphoneModelNumber = new FormControl('', [Validators.required, Validators.pattern(/\d/)]);
  editingHeadphoneWeight = new FormControl('', Validators.required);
  editingHeadphoneDate = new FormControl('', Validators.required);
  editingHeadphoneASIN = new FormControl('', Validators.required);
  editingHeadphoneManufacturer = new FormControl('', Validators.required);

  constructor(
    private readonly hService: HeadphonesService,
    private readonly alertService: AlertService
  ) { }

  ngOnInit() { }

  shortDate(val: string) {
    return formatDate(val);
  }

  ngOnChanges() {
    if (this.headphones) {
      this.paginationData.totalItems = this.headphones.length;
      this.paginate();
    }
  }

  paginate(): void {
    const page = this.paginationData.currentPage;
    const to = this.paginationData.itemsPerPage * page;

    this.currentShowingHeadphones = this.headphones.slice(
      page == 1 ? 0 : to - this.paginationData.itemsPerPage,
      to
    );
  }

  getCurrentPageInfo() {
    return this.paginationData.currentPage == 1
      ? 1
      : (this.paginationData.currentPage * this.paginationData.itemsPerPage) - this.paginationData.itemsPerPage
  }

  getPageTo(): number {
    return Math.min(this.paginationData.currentPage * this.paginationData.itemsPerPage, this.paginationData.totalItems);
  }

  edit(headphone: Headphone): void {
    this.headphones.forEach(h => h.editing = false);
    headphone.editing = true;

    this.editingHeadphoneModelNumber.setValue(headphone.modelNumber);
    this.editingHeadphoneWeight.setValue(headphone.weight);
    this.editingHeadphoneDate.setValue(editingDate(headphone.dateFirstAvailable));
    this.editingHeadphoneASIN.setValue(headphone.asin);
    this.editingHeadphoneManufacturer.setValue(headphone.manufacturer);
  }

  async delete(headphone: Headphone): Promise<void> {
    const ok = await this.alertService.confirm('The headphone will be deleted');
    if (ok.isConfirmed) {
      this.hService.delete(headphone).subscribe(() => {
        this.headphoneAffected.emit(true);
      });
    }
  }

  update(headphone: Headphone): void {
    const copy = Object.assign(headphone);
    copy.modelNumber = this.editingHeadphoneModelNumber.value;
    copy.weight = this.editingHeadphoneWeight.value;
    copy.dateFirstAvailable = this.editingHeadphoneDate.value;
    copy.asin = this.editingHeadphoneASIN.value;
    copy.manufacturer = this.editingHeadphoneManufacturer.value;
    this.hService.update(copy).subscribe(resp => {
      headphone.modelNumber = this.editingHeadphoneModelNumber.value;
      headphone.weight = this.editingHeadphoneWeight.value;
      headphone.dateFirstAvailable = this.editingHeadphoneDate.value;
      headphone.manufacturer = this.editingHeadphoneManufacturer.value;
      headphone.asin = this.editingHeadphoneASIN.value;
      headphone.editing = false;
    }, (err) => {
      this.alertService.message('Error', 'Error undating headphone data', 'error');
    });
  }

  cancelEdit(headphone: Headphone): void {
    headphone.editing = false;
  }

  next(): void {
    if (this.canGoNext()) {
      this.paginationData.currentPage += 1;
      this.paginate();
    }
  }
  prev(): void {
    if (this.canGoBack()) {
      this.paginationData.currentPage -= 1;
      this.paginate();
    }
  }

  canGoNext(): boolean {
    return this.paginationData.currentPage * this.paginationData.itemsPerPage < this.paginationData.totalItems;
  }

  canGoBack(): boolean {
    return this.paginationData.currentPage > 1;
  }

  closeReadonlyModal() {
    this.currentHeadphone = null;
    $(READONLY_MODAL_REF).modal('hide');
  }

  show(headphone: Headphone) {
    this.currentHeadphone = headphone;
    $(READONLY_MODAL_REF).modal('show');
  }

}


interface PaginationData {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
}