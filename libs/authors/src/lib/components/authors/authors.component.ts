import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { ClassBinder } from "@javascripthub/utils";

@Component({
  standalone: true,
  selector: 'jshub-authors',
  providers: [ClassBinder],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: 'authors.component.scss',
  templateUrl: 'authors.component.html'
})
export class AuthorsComponent {
  private _classBinder = inject(ClassBinder);

  constructor() {
    this._classBinder.bind('jshub-authors');
  }
}
