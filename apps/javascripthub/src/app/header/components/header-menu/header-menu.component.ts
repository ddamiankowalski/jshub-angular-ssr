import { ChangeDetectionStrategy, Component, inject, ViewEncapsulation } from "@angular/core";
import { NavigationService } from "@javascripthub/navigation";
import { ClassBinder } from "@javascripthub/utils";

interface MenuItem {
  label: string;
  route: string;
}

@Component({
    standalone: true,
    selector: 'jshub-header-menu',
    templateUrl: 'header-menu.component.html',
    styleUrl: 'header-menu.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    providers: [ClassBinder]
})
export class HeaderMenuComponent {
    private _navigation = inject(NavigationService)

    public items: MenuItem[] = [
        { label: 'Articles', route: '' },
        { label: 'Courses', route: '' },
        { label: 'Authors', route: 'authors' },
    ];

    private _classBinder = inject(ClassBinder);

    constructor() {
        this._classBinder.bind('jshub-header-menu');
    }

    public onItemClick(item: MenuItem): void {
      this._navigation.navigate(['/', item.route])
    }
}
