FROM node:lts-alpine3.15

COPY ./resources/public/index.html /app/resources/public/
COPY ./src/cljs/ /app/src/cljs/
COPY ./src/input.css /app/src/
COPY ./package.json ./package-lock.json ./shadow-cljs.edn ./tailwind.config.js /app/

RUN apk add openjdk11

WORKDIR /app

RUN npm install --production
RUN npx shadow-cljs release app
RUN npx tailwindcss -i src/input.css -o resources/public/output.css --minify
RUN npm install serve

EXPOSE 8081

CMD ["npx", "serve", "-p", "8081", "resources/public"]