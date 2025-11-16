# Stage 1: build
FROM node:20-alpine AS builder

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Stage 2: production image
FROM nginx:stable-alpine

COPY --from=builder /app/dist /usr/share/nginx/html

# Custom Nginx config (optional)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


