FROM node

WORKDIR ./
COPY frontend/ ./

RUN npm rebuild && npm install
CMD ["node", "server.js"]

EXPOSE 8080