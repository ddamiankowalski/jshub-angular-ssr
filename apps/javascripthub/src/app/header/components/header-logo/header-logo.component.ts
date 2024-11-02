import { ChangeDetectionStrategy, Component, inject, output, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ClassBinder } from '@javascripthub/utils';

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
  public logoClick = output<void>();

  private _classBinder = inject(ClassBinder);
  private _router = inject(Router);

  constructor() {
    this._classBinder.bind('jshub-header-logo');
  }

  public onClick(): void {
    this._router.navigate(['/']);
    this.logoClick.emit();
  }
}
