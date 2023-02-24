FROM mcr.microsoft.com/devcontainers/javascript-node:0-18-bullseye
WORKDIR /src/app

COPY . .
RUN yarn install
EXPOSE 5173
CMD ["yarn", "run", "dev", "--host"]