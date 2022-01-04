FROM node:16-alpine

WORKDIR /app

COPY package.json ./

COPY yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .


FROM ubuntu

RUN apt-get update
RUN apt-get install mongodb 


