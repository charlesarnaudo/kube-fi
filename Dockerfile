FROM node

WORKDIR ./
COPY frontend/ ./

RUN npm install && npm run build
CMD "npm run dev"

EXPOSE 8080