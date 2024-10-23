import { ChangeDetectionStrategy, Component, inject, input, ViewEncapsulation } from "@angular/core";
import { ClassBinder } from "../../../../utils/services/class-binder.service";

@Component({
    standalone: true,
    selector: 'jshub-article-section',
    templateUrl: 'article-section.component.html',
    styleUrl: 'article-section.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    providers: [ClassBinder]
})
export class ArticleSectionComponent {
    public header = input<string>();
    public content = input.required<string>();
    
    private _classBinder = inject(ClassBinder);

    public get sectionId(): string {
        const header = this.header();

        if(!header) {
            return '';
        }

        return header.toLowerCase().split(' ').join('-');
    }

    constructor() {
        this._classBinder.bind('jshub-article-section')
    }
}