import {
  ChangeDetectionStrategy,
  Component,
  inject,
  ViewEncapsulation,
} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { NavigationPage } from '@javascripthub/navigation';
import { ClassBinder } from '@javascripthub/utils';
import { NgIcon } from '@ng-icons/core';

@Component({
  standalone: true,
  selector: 'jshub-authors',
  styleUrl: 'authors.component.scss',
  templateUrl: 'authors.component.html',
  providers: [ClassBinder],
  imports: [NgIcon],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorsComponent extends NavigationPage {
  protected override _route = 'authors';

  private _classBinder = inject(ClassBinder);
  private _title = inject(Title);
  private _meta = inject(Meta);

  constructor() {
    super();
    this._classBinder.bind('jshub-authors');
    this._setMeta();
  }

  protected override _fadeOut(): Promise<unknown> {
    return this._defaultFadeOut();
  }

  private _setMeta(): void {
    this._title.setTitle(`jshub | authors`);
    this._meta.addTag({
      name: 'description',
      content:
        'Meet the talented authors behind JavaScript Hub, your go-to source for expert insights, tutorials, and tips on JavaScript development. Discover their profiles, expertise, and contributions to the world of coding.',
    });
  }
}
