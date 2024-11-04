FROM node:22-alpine

ENV APP=/home/app
WORKDIR $APP

RUN mkdir -p $APP/node_modules
COPY ./package*.json $APP/
RUN npm config set depth=0 && npm install

COPY . $APP
RUN chown -R node:node $APP

USER node

EXPOSE 8000

CMD ["npm", "run", "dev"]