import { ComponentFixture } from '@angular/core/testing';

/**
 *
 * @param fixture
 * @param className
 * @returns
 */
export const hasClass = <T>(fixture: ComponentFixture<T>, className: string): boolean => {
  return fixture.debugElement.classes[className];
}
