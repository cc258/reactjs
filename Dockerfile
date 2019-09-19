FROM node:10.16.0
COPY . /app
WORKDIR /app
RUN npm install
RUN npm start
EXPOSE 8080 8090 8081