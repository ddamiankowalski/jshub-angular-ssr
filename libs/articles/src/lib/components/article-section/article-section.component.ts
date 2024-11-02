import { afterNextRender, ChangeDetectionStrategy, Component, ElementRef, inject, input, ViewEncapsulation } from "@angular/core";
import { RouterModule } from "@angular/router";
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import { ArticleSection } from "../../interfaces/article";
import { ClassBinder } from "@javascripthub/utils";
import { SectionNavigationService } from "../../services/section-navigation.service";

@Component({
    standalone: true,
    selector: 'jshub-article-section',
    templateUrl: 'article-section.component.html',
    styleUrl: 'article-section.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    providers: [ClassBinder],
    imports: [RouterModule]
})
export class ArticleSectionComponent {
    public section = input.required<ArticleSection>();
    
    private _classBinder = inject(ClassBinder);
    private _navigation = inject(SectionNavigationService)
    private _elementRef = inject(ElementRef);

    public get sectionId(): string {
        return this._navigation.getId(this.section());
    }

    constructor() {
        this._classBinder.bind('jshub-article-section');
        hljs.registerLanguage('javascript', javascript);

        this._updateActiveSection();
    }

    public highlight(code: string): string {
        return hljs.highlight(code, { language: 'javascript' }).value
    }

    public scrollInto(): void {
        this._navigation.scrollInto(this.section())
    }

    private _updateActiveSection(): void {
        afterNextRender(() => {
            const observer = new IntersectionObserver((entries) => {
                if(entries[0].isIntersecting) { 
                    this._navigation.setActiveSection(this.section())
                } else if(this._navigation.activeSection() === this.section()) {
                    this._navigation.setActiveSection(null);
                }
            }, { threshold: 0.25 })
    
            observer.observe(this._elementRef.nativeElement)
        })
    }
}