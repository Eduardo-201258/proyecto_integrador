FROM node:18.16.1

RUN mkdir app
WORKDIR /app

COPY package*.json .
RUN npm  install 

COPY . .
RUN npm run build:tsc

EXPOSE 3000

CMD [ "npm", "run", "start" ]