import { ElementRef, inject, Injectable } from "@angular/core";

@Injectable()
export class ClassBinder {
    private _elementRef = inject(ElementRef);

    private get _nativeElement(): HTMLElement {
        return this._elementRef.nativeElement;
    }

    public bind(className: string): void {
        this._nativeElement.classList.add(className);
    }

    public unbind(className: string): void {
        this._nativeElement.classList.remove(className);
    }

    public conditionalBind(condition: boolean, className: string): void {
        if(condition) {
            this._nativeElement.classList.add(className);
        } else {
            this._nativeElement.classList.remove(className);
        }
    }
}