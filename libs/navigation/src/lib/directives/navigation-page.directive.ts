import { Router } from '@angular/router';
import { Directive, inject } from '@angular/core';
import { NavigationService } from '../services';

@Directive()
export abstract class NavigationPage {
  protected _router = inject(Router);

  private _navigation = inject(NavigationService);

  constructor() {
    this._navigation.setActivePage(this);
  }

  public navigate(commands: string[], ...args: unknown[]): void {
    this._fadeOut(args)
      .then(() => this._router.navigate(commands))
  }

  protected abstract _fadeOut(...args: unknown[]): Promise<unknown>;
}
