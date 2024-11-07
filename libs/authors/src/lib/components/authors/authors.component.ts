import { ChangeDetectionStrategy, Component, inject, ViewEncapsulation } from "@angular/core";
import { NavigationPage } from "@javascripthub/navigation";
import { ClassBinder } from "@javascripthub/utils";
import { NgIcon } from "@ng-icons/core";

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
  private _classBinder = inject(ClassBinder);

  constructor() {
    super();
    this._classBinder.bind('jshub-authors');
  }

  protected override _fadeOut(): Promise<unknown> {
      return this._defaultFadeOut();
  }
}
