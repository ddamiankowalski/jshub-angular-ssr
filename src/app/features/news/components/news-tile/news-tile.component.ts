import { ChangeDetectionStrategy, Component, computed, ElementRef, HostListener, inject, input, output, ViewEncapsulation } from "@angular/core";
import { ClassBinder } from "../../../../utils/services/class-binder.service";
import { NgIconComponent } from "@ng-icons/core";
import { News } from "../../types/news";
import { NgStyle } from "@angular/common";

@Component({
    standalone: true,
    selector: 'jshub-news-tile',
    templateUrl: 'news-tile.component.html',
    styleUrl: 'news-tile.component.scss',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [ClassBinder],
    imports: [NgIconComponent, NgStyle]
})
export class NewsTileComponent {
    @HostListener('click') public onClick(): void {
        this.newsClick.emit(this.news()._id);
    }

    public newsClick = output<string>()
    public news = input.required<News>();

    public url = computed(() => {
        const news = this.news();
        console.log(news);
        return `api/assets/${Math.random() > 0.5 ? '1' : '2'}.webp`;
    })

    private _classBinder = inject(ClassBinder);
    private _elementRef = inject(ElementRef);

    private get _nativeElement(): HTMLElement {
        return this._elementRef.nativeElement;
    }

    constructor() {
        this._classBinder.bind('jshub-news-tile');
    }

    public fade(delay = 0): Promise<Animation> {
        const keyframes = [
            { opacity: 1 },
            { opacity: 0 }
        ];

        const options = {
            duration: 250,
            iterations: 1,
            fill: 'forwards' as FillMode,
            delay
        }

        const animation = this._nativeElement.animate(keyframes, options)
        return animation.finished;
    }
}