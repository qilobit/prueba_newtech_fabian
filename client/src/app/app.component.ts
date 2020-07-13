import { Component, OnInit } from '@angular/core';
import { HeadphonesService } from './services/headphones.service';
import { Headphone } from './models/headphone.model';
import { AlertService } from './services/alert.service';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  headphones: Headphone[] = [];
  constructor(
    private readonly hService: HeadphonesService,
    private readonly alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.getHeadphones();
  }
  title = 'client';

  getHeadphones(): void {
    this.hService.get()
      .subscribe((resp: any) => this.headphones = resp,
        (err) => {
          this.alertService.message('Error', err.message, 'error');
          console.log(err);
        });
  }
}
