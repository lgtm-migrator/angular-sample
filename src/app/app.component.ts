import {ChangeDetectionStrategy, Component, EventEmitter} from '@angular/core';
import {interval, Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  public readonly data$: Observable<{
    counter: number,
  }>;

  public readonly start$: EventEmitter<void> = new EventEmitter();
  public readonly stop$: EventEmitter<void> = new EventEmitter();

  constructor() {
    this.data$ = interval(500).pipe(
      // Put your code here. Feel free to change the lines below too. Any rxjs operator can be used.
      // Try to avoid nested .pipes / .subscribes.
      // The goal is to provide a readable solution in acceptable time that demonstrates your knowledge of rxjs.

      map(counter => counter + 1),
      startWith(0),
      map(counter => ({counter})),
    );
  }
}
