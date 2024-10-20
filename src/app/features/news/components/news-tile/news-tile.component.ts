import { ChangeDetectionStrategy, Component, HostListener, inject, ViewEncapsulation } from "@angular/core";
import { ClassBinder } from "../../../../utils/services/class-binder.service";
import { NgIconComponent } from "@ng-icons/core";
import { Router } from "@angular/router";

@Component({
    standalone: true,
    selector: 'jshub-news-tile',
    templateUrl: 'news-tile.component.html',
    styleUrl: 'news-tile.component.scss',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [ClassBinder],
    imports: [NgIconComponent]
})
export class NewsTileComponent {
    @HostListener('click') public onClick(): void {
        this._router.navigate(['/', 'article', '1'])
    }

    private _classBinder = inject(ClassBinder);
    private _router = inject(Router);

    constructor() {
        this._classBinder.bind('jshub-news-tile');
    }
}