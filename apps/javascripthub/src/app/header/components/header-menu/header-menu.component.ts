import { ChangeDetectionStrategy, Component, inject, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";
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
    private _router = inject(Router)

    public items: MenuItem[] = [
        { label: 'Articles', route: '/' },
        { label: 'Courses', route: '/' },
        { label: 'Authors', route: 'authors' },
    ];

    private _classBinder = inject(ClassBinder);

    constructor() {
        this._classBinder.bind('jshub-header-menu');
    }

    public onItemClick(item: MenuItem): void {
      this._router.navigate(['/', item.route])
    }
}
