import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
  ViewEncapsulation,
} from '@angular/core';
import { HeaderMenuComponent } from '../header-menu/header-menu.component';
import { HeaderLogoComponent } from '../header-logo/header-logo.component';
import { HeaderAuthComponent } from '../header-auth/header-auth.component';
import { ClassBinder } from '@javascripthub/utils';

@Component({
  standalone: true,
  selector: 'jshub-header',
  templateUrl: 'header.component.html',
  styleUrl: 'header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [ClassBinder],
  imports: [HeaderLogoComponent, HeaderMenuComponent, HeaderAuthComponent],
})
export class HeaderComponent {
  public fixedVisible = signal(false);

  private _classBinder = inject(ClassBinder);

  constructor() {
    this._classBinder.bind('jshub-header');
  }

  public onLogoClick(): void {
    this.fixedVisible.set(false);
  }
}
