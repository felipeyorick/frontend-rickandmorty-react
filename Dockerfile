# Etapa de build
FROM node:20-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm run build
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
