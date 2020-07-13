import { Component, OnInit, OnDestroy } from '@angular/core';
import { HeadphonesService } from './services/headphones.service';
import { Headphone } from './models/headphone.model';
import { AlertService } from './services/alert.service';
import { Observable, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  headphones: Headphone[] = [];
  loading: boolean = false;
  headphoneSubscription: Subscription;
  title = 'client';

  constructor(
    private readonly hService: HeadphonesService,
    private readonly alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.getHeadphones();
  }

  ngOnDestroy(): void {
    this.headphoneSubscription.unsubscribe();
  }

  getHeadphones(): void {
    this.loading = true;
    this.headphoneSubscription = this.hService.get()
      .subscribe((resp: any) => {
        this.headphones = resp;
        this.loading = false;
      },
        (err) => {
          this.loading = false;
          this.alertService.message('Error', 'Server not responding, please contact support.', 'error');
          console.log(err);
        });
  }
}
