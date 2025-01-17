FROM oven/bun:1 AS build
WORKDIR /app
COPY package*.json ./
RUN bun install
COPY . .
ARG VITE_API_URL
ARG VITE_TMDB_API_URL
RUN VITE_API_URL=$VITE_API_URL VITE_TMDB_API_URL=$VITE_TMDB_API_URL bun run build

FROM nginx:1.26.2 AS production
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
COPY nginx.conf /etc/nginx/nginx.conf