FROM hayd/deno:1.5.2

EXPOSE 3000

WORKDIR /usr/src

USER deno

ADD [".", "/usr/src"]

RUN ["deno", "cache", "index.ts"]

CMD ["run", "--allow-net", "index.ts"]
