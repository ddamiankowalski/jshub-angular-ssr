module.exports = {
  apps: [
    {
      name: 'ssr',
      script: './dist/apps/javascripthub/server/server.mjs',
    },
    {
      name: 'api',
      script: './dist/apps/api/main.js',
    },
  ],
};
