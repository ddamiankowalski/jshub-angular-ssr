import { hasClass } from '@javascripthub/testing';
import { ArticleComponent } from '../article/article.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('ArticleComponent', () => {
  let fixture: ComponentFixture<ArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { params: of('') },
            params: of(''),
          },
        },
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ArticleComponent);
    fixture.detectChanges();
  });

  it('successfully initializes', () => {
    expect(fixture).toBeTruthy();
  });

  it('has correct class', () => {
    expect(hasClass(fixture, 'jshub-article')).toBeTruthy();
  });
});
