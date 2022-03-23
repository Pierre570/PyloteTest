FROM node:16-alpine
WORKDIR /app/client/
COPY package*.json /app/client/
RUN npm install --force
COPY . /app/client/
ENV PORT=3000
EXPOSE 3000
CMD ["npm", "run", "start"]