FROM clojure:temurin-19-tools-deps-alpine

COPY ./resources/env /app/resources/env
COPY ./src/clj /app/src/clj
COPY ./deps.edn /app

WORKDIR /app

EXPOSE 4000

CMD ["clojure", "-M:run"]