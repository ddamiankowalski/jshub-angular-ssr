FROM node:20-alpine3.20 as build

WORKDIR /app
COPY . .

RUN npm ci
RUN npm install nx -g
RUN npm install pm2 -g

RUN nx run api:build:production && nx run javascripthub:build:production

CMD ["pm2-runtime", "./dist/apps/javascripthub/server/server.mjs"] && ["pm2-runtime", "./dist/apps/api/main.js"]
