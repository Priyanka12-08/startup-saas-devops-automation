# Use lightweight nginx image
FROM nginx:alpine

# Copy frontend files to nginx server directory
COPY . /usr/share/nginx/html

# Expose web port
EXPOSE 80

# Nginx runs automatically (no CMD needed)