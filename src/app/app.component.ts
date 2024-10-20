import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from "./features/header/components/header-component/header.component";

@Component({
  standalone: true,
  imports: [RouterModule, HeaderComponent],
  selector: 'jshub-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'javascripthub';
  public test = signal('');

  private _http = inject(HttpClient);

  constructor() {
    this._http.get('https://pokeapi.co/api/v2/pokemon').subscribe(x => {
      this.test.set(x.toString())
    })
  }
}
