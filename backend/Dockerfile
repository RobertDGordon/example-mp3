FROM node:19-alpine
WORKDIR /app
COPY ./backend .
EXPOSE 4000
RUN npm install
CMD ["npm", "start"]