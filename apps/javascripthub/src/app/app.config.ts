import { ApplicationConfig, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideIcons, provideNgIconsConfig } from '@ng-icons/core';
import { cssClose, cssComment, cssGitFork, cssHashtag, cssHeart, cssMenu, cssUserList } from '@ng-icons/css.gg';
import { bootstrapGithub, bootstrapLinkedin } from '@ng-icons/bootstrap-icons';

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideRouter(appRoutes),
    provideHttpClient(withFetch()),
    provideClientHydration(withEventReplay()),
    provideIcons({
      cssMenu,
      cssClose,
      cssHeart,
      cssUserList,
      cssComment,
      cssHashtag,
      cssGitFork,
      bootstrapLinkedin,
      bootstrapGithub
    }),
    provideNgIconsConfig({
      size: '1rem',
    }),
  ]
};
