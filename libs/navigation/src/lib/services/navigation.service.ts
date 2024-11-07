import { Injectable, Signal, signal } from '@angular/core';
import { NavigationPage } from '../directives';

@Injectable({ providedIn: 'root' })
export class NavigationService {
  private _activePage = signal<NavigationPage | null>(null);

  get activePage(): Signal<NavigationPage | null> {
    return this._activePage;
  }

  public navigate(commands: string[], ...args: unknown[]): void {
    const page = this._activePage();

    if (!page) {
      throw new Error('Could not navigate to page. The active page is null');
    }

    page.navigate(commands, ...args);
  }

  public setActivePage(page: NavigationPage): void {
    this._activePage.set(page);
  }
}
