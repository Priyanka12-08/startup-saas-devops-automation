# Base image
FROM node:18

# Create app directory
WORKDIR /app

# Copy package files first (better caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the application
COPY . .

# Expose backend port
EXPOSE 3000

# Start backend
CMD ["node", "index.js"]