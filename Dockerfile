FROM node:20-alpine3.20 as build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci
RUN npm install nx -g
RUN npm install pm2 -g

COPY . .

RUN nx run api:build:production && nx run javascripthub:build:production

EXPOSE 4000

CMD ["pm2-runtime", "start", "pm2.config.js"]
