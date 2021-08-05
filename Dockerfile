# syntax=docker/dockerfile:1
FROM alpine:3.11 
FROM node:16-alpine3.11

WORKDIR /telegram_bot
COPY . /telegram_bot

RUN cd /telegram_bot
RUN npm install --only=prod

CMD npm run start