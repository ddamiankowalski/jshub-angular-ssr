import { Directive, inject } from '@angular/core';
import { NavigationService } from '../services';
import { Router } from '@angular/router';

@Directive()
export abstract class NavigationPage {
  protected _navigation = inject(NavigationService);

  private _router = inject(Router);

  constructor() {
    this._navigation.setActivePage(this);
  }

  public navigate(commands: string[], ...args: unknown[]): void {
    if(this._router.url === commands.join('')) {
      return;
    }

    this._fadeOut(args)
      .then(() => this._router.navigate(commands))
  }

  protected abstract _fadeOut(...args: unknown[]): Promise<unknown>;
}
