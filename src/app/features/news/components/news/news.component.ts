import { ChangeDetectionStrategy, Component, computed, inject, viewChildren, ViewEncapsulation } from "@angular/core";
import { NewsTileComponent } from "../news-tile/news-tile.component";
import { ClassBinder } from '../../../../utils/services/class-binder.service';
import { JsonPipe } from "@angular/common";
import { injectRouteData } from 'ngxtension/inject-route-data';
import { Router } from "@angular/router";

@Component({
    standalone: true,
    selector: 'jshub-news',
    templateUrl: 'news.component.html',
    styleUrl: 'news.component.scss',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [ClassBinder],
    imports: [NewsTileComponent, JsonPipe]
})
export class NewsComponent {
    public routeData = injectRouteData();
    public news = computed(() => this.routeData()['news'])

    private _classBinder = inject(ClassBinder);
    private _router = inject(Router);

    private _tiles = viewChildren(NewsTileComponent);

    constructor() {
        this._classBinder.bind('jshub-news');
    }

    public onNewsClick(id: string): void {
        const tiles = this._tiles();

        // Promise.all(tiles.map((tile, index) => {
        //     if(tile.news()._id === id) {
        //         return tile.fade(index * 50 + 300)
        //     }
             
        //     return tile.fade(50)
        // })).then(() => {
        // })

        this._router.navigate(['/', 'article', id])

    }
}