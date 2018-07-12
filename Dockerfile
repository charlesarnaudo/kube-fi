FROM node

WORKDIR ./
COPY frontend/ ./

RUN npm install && npm run build
CMD "npm run prod"

EXPOSE 8080