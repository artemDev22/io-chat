FROM node:14


WORKDIR /app

RUN npm install -g nodemon ts-node

COPY package.json .

RUN npm install

COPY . .

