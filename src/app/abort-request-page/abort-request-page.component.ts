import { CatService } from './cat.service';
import { Component, OnInit } from '@angular/core';
import { timer, interval, BehaviorSubject, Subject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-abort-request-page',
  templateUrl: './abort-request-page.component.html',
  styleUrls: ['./abort-request-page.component.scss']
})
export class AbortRequestPageComponent implements OnInit {
  private complete$ = new Subject();

  constructor(private catService: CatService) { }

  ngOnInit() {
    // this.testNormalHttpRequest();
    this.testGraphQLRequest();
  }

  public testNormalHttpRequest() {
    interval(1000).pipe(
      switchMap(() => {
        return this.catService.getAll();
      }),
      takeUntil(this.complete$), //  takeUntil must be the last operator
    ).subscribe(data => {
      console.log(new Date(), data);
    })
  }

  public testGraphQLRequest() {
    interval(1000).pipe(
      switchMap(() => {
        return this.catService.getAuthor();
      }),
      takeUntil(this.complete$), //  takeUntil must be the last operator
    ).subscribe(data => {
      console.log(new Date(), data);
    })
  }

  ngOnDestroy(): void {
    this.complete$.next(); // should trigger one value before complete
    this.complete$.complete();
  }


}
