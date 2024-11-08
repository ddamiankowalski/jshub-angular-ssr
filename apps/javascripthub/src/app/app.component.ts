import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/components/header-component/header.component';
import { ClassBinder } from '@javascripthub/utils';

@Component({
  standalone: true,
  imports: [RouterModule, HeaderComponent],
  selector: 'jshub-root',
  templateUrl: 'app.component.html',
  styleUrl: 'app.component.scss',
  providers: [ClassBinder],
})
export class AppComponent {
  public title = 'jshub.dev';

  private _classBinder = inject(ClassBinder);

  constructor() {
    this._classBinder.bind('jshub-root');
  }
}
