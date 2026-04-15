🧠 1. What is Docker Compose?
Simple definition:

👉 Docker Compose is a tool that lets you run multiple Docker containers together using one file and one command.

Instead of running:

docker run backend
docker run frontend
docker run database

You do:

docker-compose up
⚙️ 2. Why Docker Compose exists (real DevOps problem)

In real systems:

You don’t run just one app.

You usually have:

Frontend (React / HTML / Nginx)
Backend (Node / Java / Python)
Database (MySQL / MongoDB)
Cache (Redis)

👉 Managing them manually is:
❌ slow
❌ error-prone
❌ not scalable

🚀 Docker Compose solves this by:

✔ defining all services in one file
✔ creating a shared network automatically
✔ handling startup order
✔ simplifying environment setup
✔ enabling reproducibility

🧩 3. Core idea of Docker Compose

You write ONE file:

docker-compose.yml

It describes:

👉 “What services should run + how they connect”

🧱 4. Structure of docker-compose.yml

Let’s break your file line by line.

📄 Basic structure
version: "3.8"

services:
  backend:
  frontend:

networks:


📅 Day 3 – Docker Compose Orchestration (Full Stack DevOps Setup)
🎯 Objective

The goal of Day 3 was to move from individual container execution to a fully orchestrated multi-container system using Docker Compose, enabling one-command deployment for the entire TravelOps AI application.

This simulates a real-world DevOps scenario where multiple services must be managed as a single system.

🧩 Project Overview (Freelance Client Requirement)

The client requires:

A full-stack Travel Recommendation platform
Independent frontend and backend services
Seamless communication between services
Simple local deployment for development and testing
Future readiness for cloud deployment (AWS ECS / Terraform)
🏗️ Architecture (Day 3 Final State)
User
 │
 ▼
Frontend (Nginx UI - Port 8080)
 │
 ▼
Backend (Node.js API - Port 3000)
 │
 ├── Travel Recommendation Engine
 └── Chatbot Service API

All services are now orchestrated using Docker Compose.

🐳 What was implemented
1. Docker Compose Setup
Created docker-compose.yml file to manage multi-container architecture
Defined services for:
Backend (Node.js + Express API)
Frontend (Nginx static UI)
2. Service Orchestration
Configured both services under a single network (bridge)
Enabled inter-service communication using service names
Ensured backend is initialized before frontend using depends_on
3. Container Networking
Docker Compose automatically created a shared network
Services communicate internally using container names:
backend:3000
frontend:80
4. Simplified Deployment Workflow

Replaced manual container execution:

❌ Before:

docker run backend
docker run frontend

✅ After:

docker compose up --build
5. Environment Standardization
Ensured consistent execution across environments
Removed dependency on manual setup
Created reproducible development environment
⚙️ Docker Compose Configuration
version: "3.8"

services:
  backend:
    build: ./app/backend
    ports:
      - "3000:3000"
    networks:
      - travel-net

  frontend:
    build: ./app/frontend
    ports:
      - "8080:80"
    depends_on:
      - backend
    networks:
      - travel-net

networks:
  travel-net:
    driver: bridge
🛠️ Technologies Used
Docker
Docker Compose (V2)
Node.js
Express.js
Nginx
HTML, CSS, JavaScript
🧠 Key Learnings (DevOps Perspective)
How Docker Compose simplifies multi-container orchestration
Difference between single-container and microservice-based deployment
Importance of service discovery using container names
Role of depends_on in service startup order
Understanding bridge networking in Docker
Migration from docker-compose (legacy) to docker compose (modern standard)
🚧 Current Status

✔ Backend containerized successfully
✔ Frontend containerized successfully
✔ Multi-container orchestration implemented
✔ Docker Compose configuration completed
✔ Internal service communication enabled
✔ One-command deployment achieved (docker compose up)

⚠️ Issue Encountered & Resolution
Issue:

Legacy docker-compose command failed due to Python 3.12 incompatibility:

ModuleNotFoundError: No module named 'distutils'
Resolution:
Migrated to modern Docker Compose V2
Replaced docker-compose with docker compose
Ensured compatibility with current Docker CLI
