import { computed, Injectable, Signal, signal } from '@angular/core';
import { NavigationPage } from '../directives';

@Injectable({ providedIn: 'root' })
export class NavigationService {
  private _activePage = signal<NavigationPage | null>(null);
  private _activeRoute = signal<string | null>(null);

  get activePage(): Signal<NavigationPage | null> {
    return this._activePage;
  }

  get activeRoute(): Signal<string | null> {
    return computed(() => {
      const page = this._activePage();

      if (page) {
        return page.route;
      }

      return null;
    });
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
