import { ChangeDetectionStrategy, Component, inject, ViewEncapsulation } from '@angular/core';
import { ClassBinder } from 'src/app/utils/services/class-binder.service';

@Component({
  standalone: true,
  selector: 'jshub-header-logo',
  templateUrl: 'header-logo.component.html',
  styleUrl: 'header-logo.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ClassBinder]
})
export class HeaderLogoComponent {
  private _classBinder = inject(ClassBinder);

  constructor() {
    this._classBinder.bind('jshub-header-logo');
  }
}
