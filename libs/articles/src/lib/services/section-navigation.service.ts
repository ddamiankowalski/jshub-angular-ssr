import { inject, Injectable, Signal, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleSection } from '../interfaces/article';

@Injectable({ providedIn: 'root' })
export class SectionNavigationService {
  private _activeSection = signal<ArticleSection | null>(null);

  private _router = inject(Router);
  private _route = inject(ActivatedRoute);

  get activeSection(): Signal<ArticleSection | null> {
    return this._activeSection;
  }

  public scrollInto(section: ArticleSection): void {
    const id = this.getId(section);
    const snapshot = this._route.snapshot;

    (document.getElementById(id) as HTMLElement).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
    this._router.navigate([...snapshot.url], { fragment: id });
  }

  public setActiveSection(section: ArticleSection | null): void {
    this._activeSection.set(section);
  }

  public getId(section: ArticleSection): string {
    return section.htmlId;
  }
}
