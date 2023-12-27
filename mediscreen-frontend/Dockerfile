# Step 1: Build the app in image 'builder'
FROM node:16-alpine AS builder

WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN npm run build

# Step 2: Use build output from 'builder'
FROM nginx:stable-alpine
LABEL version="1.0"

COPY nginx.conf /etc/nginx/nginx.conf

WORKDIR /usr/share/nginx/html
COPY /dist/mediscreen/ .