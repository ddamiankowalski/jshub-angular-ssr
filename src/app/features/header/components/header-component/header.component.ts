import { afterNextRender, ChangeDetectionStrategy, Component, ElementRef, inject, signal, ViewEncapsulation } from "@angular/core";
import { ClassBinder } from "../../../../utils/services/class-binder.service";
import { HeaderMenuComponent } from "../header-menu/header-menu.component";
import { HeaderLogoComponent } from "../header-logo/header-logo.component";
import { HeaderAuthComponent } from "../header-auth/header-auth.component";

@Component({
    standalone: true,
    selector: 'jshub-header',
    templateUrl: 'header.component.html',
    styleUrl: 'header.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    providers: [ClassBinder],
    imports: [HeaderLogoComponent, HeaderMenuComponent, HeaderAuthComponent]
})
export class HeaderComponent {
    public fixedVisible = signal(false);

    private _classBinder = inject(ClassBinder);
    private _elementRef = inject(ElementRef);

    private get _nativeElement(): HTMLElement {
        return this._elementRef.nativeElement;
    }

    constructor() {
        this._classBinder.bind('jshub-header');

        afterNextRender(() => {
            this._showFixedHeader();
        })
    }

    public onLogoClick(): void {
        this.fixedVisible.set(false);
    }

    private _showFixedHeader(): void {
        const observer = new IntersectionObserver((e) => {
            const visible = e[0].isIntersecting
            this.fixedVisible.set(!visible)
        }, { threshold: 0, rootMargin: '300px' });

        observer.observe(this._nativeElement);
    }
}