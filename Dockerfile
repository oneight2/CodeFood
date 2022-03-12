FROM node:lts-alpine
ENV NODE_ENV=development
ENV PORT=3030
ENV MYSQL_HOST=db
ENV MYSQL_USER: user
ENV MYSQL_ROOT_PASSWORD: mypassword
ENV MYSQL_PASSWORD: mypassword
ENV MYSQL_DBNAME: db_codefood
ENV SERVICE_NAME=codefood-backend
ENV SECRET_TOKEN=BIOFARMA
WORKDIR /usr/src/app
RUN npm install -g nodemon
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE 3030
RUN chown -R node /usr/src/app
USER node
CMD ["npm", "start"]
