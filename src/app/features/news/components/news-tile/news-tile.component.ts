import { ChangeDetectionStrategy, Component, HostListener, inject, input, output, ViewEncapsulation } from "@angular/core";
import { ClassBinder } from "../../../../utils/services/class-binder.service";
import { NgIconComponent } from "@ng-icons/core";
import { News } from "../../types/news";

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
        this.newsClick.emit(this.news()._id);
    }

    public newsClick = output<string>()
    public news = input.required<News>();

    private _classBinder = inject(ClassBinder);

    constructor() {
        this._classBinder.bind('jshub-news-tile');
    }
}