import {Component} from '@angular/core';
import {of} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public readonly orders$ = of([]);
  // public readonly orders$ = this.allOrdersGQL.fetch().pipe(
  //   map(res => res.data.orders),
  // )
  //
  // constructor(private allOrdersGQL: GetAllOrdersGQL) {}
}
