import {
  ChangeDetectionStrategy,
  Component,
  inject,
  ViewEncapsulation,
} from '@angular/core';
import { Router } from '@angular/router';
import { ClassBinder } from '@javascripthub/utils';
import { NgIcon } from '@ng-icons/core';

@Component({
  standalone: true,
  selector: 'jshub-article-author',
  templateUrl: 'article-author.component.html',
  styleUrl: 'article-author.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ClassBinder],
  imports: [NgIcon],
})
export class ArticleAuthorComponent {
  private _classBinder = inject(ClassBinder);
  private _router = inject(Router);

  constructor() {
    this._classBinder.bind('jshub-article-author');
  }

  public onLinkedin(): void {
    this._router.navigate([]).then(() => {
      window.open(
        'https://www.linkedin.com/in/damian-kowalski-17a1261b8/',
        '_blank',
      );
    });
  }

  public onGithub(): void {
    this._router.navigate([]).then(() => {
      window.open('https://github.com/ddamiankowalski', '_blank');
    });
  }
}
