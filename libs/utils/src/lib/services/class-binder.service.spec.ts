import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { ClassBinder } from './class-binder.service';
import { hasClass } from '@javascripthub/testing';

@Component({
  standalone: true,
  selector: 'jshub-test',
  template: '',
  providers: [ClassBinder],
})
export class TestComponent {
  constructor(private _classBinder: ClassBinder) {
    _classBinder.bind('jshub-test');
  }

  public unbind(className: string): void {
    this._classBinder.unbind(className);
  }

  public conditionalBind(className: string, value: boolean): void {
    this._classBinder.conditionalBind(value, className);
  }
}

describe('ClassBinder', () => {
  let binder: ClassBinder;
  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    binder = fixture.componentRef.injector.get(ClassBinder);
    component = fixture.componentInstance;
  });

  it('successfully initializes', () => {
    expect(binder).toBeTruthy();
  });

  it('correctly binds the class', () => {
    expect(hasClass(fixture, 'jshub-test')).toBeTruthy();
  });

  it('unbinds the class', () => {
    component.unbind('jshub-test');
    expect(hasClass(fixture, 'jshub-test')).toBeFalsy();
  });

  it('adds the class when condition is true', () => {
    component.conditionalBind('conditional-class', true);
    expect(hasClass(fixture, 'conditional-class')).toBeTruthy();
  });

  it('adds the class when condition is false', () => {
    component.conditionalBind('conditional-class', false);
    expect(hasClass(fixture, 'conditional-class')).toBeFalsy();
  });
});
