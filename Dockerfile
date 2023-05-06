# Stage 1: Build Angular application
FROM node:16.14.2 as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npx ng build --configuration production

RUN ls -la /app/dist/bank_project

# Stage 2: Serve the Angular app with Nginx
FROM nginx:1.21.0-alpine

COPY --from=build /app/dist/bank_project /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 81

CMD ["nginx", "-g", "daemon off;"]
