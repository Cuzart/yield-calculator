FROM node:lts-alpine AS runtime
WORKDIR /app
COPY . .
RUN npm i
RUN npm run build

FROM httpd:2.4 AS runtime
COPY --from=build /app/dist /usr/local/apache2/htdocs/
EXPOSE 80