import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';
import { execSync } from 'child_process';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // This hook is triggered before tests start running
      on('before:browser:launch', () => {
        // Run an npm command to build the frontend server or other tasks
        try {
          console.log('Running npm build before tests...');
          execSync('npx nx serve api', { stdio: 'inherit' }); // Runs npm build
        } catch (error) {
          console.error('Error while running npm build:', error);
          process.exit(1); // Exit if the command fails
        }
      });

      return config;
    },
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run-many -t serve api javascripthub',
        production: 'npx nx run javascripthub:serve-static',
      },
      ciWebServerCommand: 'npx nx run javascripthub:serve-static',
      ciBaseUrl: 'http://localhost:4200',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
