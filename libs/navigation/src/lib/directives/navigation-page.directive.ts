import { Router } from '@angular/router';
import { Directive, inject } from '@angular/core';

@Directive()
export abstract class NavigationPage {
  private _router = inject(Router);

  public navigate(commands: string[]): void {
    this._fadeOut()
      .then(() => this._router.navigate(commands))
  }

  protected abstract _fadeOut(): Promise<void>;
}
