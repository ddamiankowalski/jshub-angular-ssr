import { ApplicationConfig, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideIcons, provideNgIconsConfig } from '@ng-icons/core';
import { cssComment, cssHeart } from '@ng-icons/css.gg'

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideRouter(appRoutes),
    provideHttpClient(withFetch()),
    provideClientHydration(withEventReplay()),
    provideIcons({ cssHeart, cssComment }),
    provideNgIconsConfig({
      size: '1rem',
    }),
  ]
};
