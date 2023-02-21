FROM node:18
WORKDIR /src/app

COPY . .
RUN yarn install
EXPOSE 5173
CMD ["yarn", "run", "dev", "--host"]