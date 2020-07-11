import { Component, OnInit } from '@angular/core';
import { Headphone } from 'src/app/models/headphone.model';
import { FormControl, Validators } from '@angular/forms';
import { HeadphonesService } from 'src/app/services/headphones.service';
import { AlertService } from 'src/app/services/alert.service';

declare var $: any;
const READONLY_MODAL_REF = "#show-headphone-modal";
@Component({
  selector: 'headphone-list',
  templateUrl: './headphone-list.component.html',
  styleUrls: ['./headphone-list.component.css']
})
export class HeadphoneListComponent implements OnInit {
  headphones: Headphone[] = [];
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

  constructor(
    private readonly hService: HeadphonesService,
    private readonly alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.headphones = this.hService.list();
    this.paginationData.totalItems = this.headphones.length;
    this.paginate();
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
    this.editingHeadphoneModelNumber.setValue(headphone.item_model_number);
    this.editingHeadphoneWeight.setValue(headphone.item_weight);
    this.editingHeadphoneDate.setValue(headphone.date_first_available);

  }

  async delete(headphone: Headphone): Promise<void> {
    const ok = await this.alertService.confirm('The headphone will be deleted');
    if (ok.isConfirmed) {
      console.log('Drop it');
    }
  }

  update(headphone: Headphone): void {
    headphone.item_model_number = this.editingHeadphoneModelNumber.value;
    headphone.item_weight = this.editingHeadphoneWeight.value;
    headphone.date_first_available = this.editingHeadphoneDate.value;
    headphone.editing = false;
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