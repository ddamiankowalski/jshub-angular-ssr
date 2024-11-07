import { Directive, ElementRef, inject } from '@angular/core';
import { NavigationService } from '../services';
import { Router } from '@angular/router';

@Directive()
export abstract class NavigationPage {
  protected _navigation = inject(NavigationService);
  protected _elementRef = inject(ElementRef);

  private _router = inject(Router);
  private _inProgress = false;

  constructor() {
    this._navigation.setActivePage(this);
  }

  public navigate(commands: string[], ...args: unknown[]): void {
    if (this._router.url === commands.join('') || this._inProgress) {
      return;
    }

    this._inProgress = true;
    this._fadeOut(args).then(() => {
      this._router.navigate(commands);
      this._inProgress = false;
    });
  }

  protected abstract _fadeOut(...args: unknown[]): Promise<unknown>;

  protected _defaultFadeOut(): Promise<Animation> {
    const keyframes = [{ opacity: 1 }, { opacity: 0 }];

    const options = {
      duration: 250,
      iterations: 1,
      fill: 'forwards' as FillMode,
    };

    const animation = this._elementRef.nativeElement.animate(
      keyframes,
      options,
    );
    return animation.finished;
  }
}
