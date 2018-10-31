FROM node:10

RUN mkdir /app

WORKDIR /app

COPY package.json /app
COPY /src /app


#RUN npm install --only=production
RUN npm install


COPY . .

EXPOSE 8080
EXPOSE 3000

CMD ["npm" , "run", "dev"]


