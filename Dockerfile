FROM node:10

RUN mkdir /app

WORKDIR /app

#all subsequent operations happens inside workdir

#COPY package.json /app
COPY . .

#deploy run+dev dependencies
RUN npm install

#webpack build for frontEnd
RUN npm run buildF

#webpack build for backend
RUN npm run buildB

RUN npm prune --production

#remove dev dependencies from node_modules
#RUN npm prune --production


EXPOSE 8080
CMD ["node" , "./src/server/backend.js"]
