# Use official Node.js image as the base for building the React app
FROM node:18 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Use a lightweight web server (Nginx) to serve the built app
FROM nginx:alpine

# Set the working directory
WORKDIR /usr/share/nginx/html

# Remove default Nginx static files
RUN rm -rf ./*

# Copy built React files from the previous stage
COPY --from=build /app/build ./

# Expose port 8002
EXPOSE 8002

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
