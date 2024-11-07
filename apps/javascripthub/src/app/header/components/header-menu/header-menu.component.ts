import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
  ViewEncapsulation,
} from '@angular/core';
import { NavigationService } from '@javascripthub/navigation';
import { ClassBinder } from '@javascripthub/utils';
import { NgIcon } from '@ng-icons/core';

interface MenuItem {
  label: string;
  route: string;
}

@Component({
  standalone: true,
  selector: 'jshub-header-menu',
  templateUrl: 'header-menu.component.html',
  styleUrl: 'header-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [ClassBinder],
  imports: [NgIcon],
})
export class HeaderMenuComponent {
  public isExpanded = signal(false);
  public iconName = computed(() => {
    const isExpanded = this.isExpanded();

    return isExpanded ? 'cssClose' : 'cssMenu';
  });

  private _navigation = inject(NavigationService);

  public items: MenuItem[] = [
    { label: 'Articles', route: '' },
    // { label: 'Courses', route: '' },
    { label: 'Who are we?', route: 'authors' },
  ];

  private _classBinder = inject(ClassBinder);

  constructor() {
    this._classBinder.bind('jshub-header-menu');
  }

  public onItemClick(item: MenuItem): void {
    this._navigation.navigate(['/', item.route]);
    this.isExpanded.set(false);
  }

  public onMobileClick(): void {
    this.isExpanded.update((isExpanded) => !isExpanded);
  }

  public onBackdropClick(): void {
    this.isExpanded.set(false);
  }
}
