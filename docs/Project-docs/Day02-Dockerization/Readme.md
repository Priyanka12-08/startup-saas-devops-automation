📅 Day 2 – Dockerization & Full Stack Integration (TravelOps AI Project)
🎯 Objective

The objective of Day 2 was to convert the TravelOps AI application into a fully containerized system and establish seamless communication between frontend and backend services. This step simulates a real-world DevOps scenario where a monolithic application is broken into deployable, scalable components.

🧩 Project Overview (Freelance Client Requirement)

A startup requires a Travel Recommendation Platform that:

Suggests travel destinations based on user preferences (weather, budget, flight cost)
Provides a chatbot assistant for travel queries
Runs reliably across environments (local → cloud)
Is prepared for CI/CD automation and AWS deployment
🏗️ Architecture (Day 2 Progress)

At this stage, the system follows a container-based architecture:

Frontend (Nginx + HTML/JS)
        │
        │ HTTP API Calls
        ▼
Backend (Node.js + Express)
        │
        ├── Travel Recommendation Engine
        └── Chatbot API Service
🐳 What was implemented
1. Backend Containerization
Created Dockerfile for Node.js backend
Exposed backend service on port 3000
Installed dependencies inside container
Enabled API endpoints for:
Travel recommendations (/recommend)
Chatbot responses (/chat)
2. Frontend Containerization
Created Dockerfile using Nginx lightweight image
Served static frontend UI through container
Built a SaaS-style dashboard interface with:
Travel filters (weather, budget, flight cost)
Results section for recommendations
Chatbot UI panel
3. Multi-Container Setup
Created isolated containers for frontend and backend
Connected services using Docker networking
Enabled inter-container communication using service names
4. API Integration
Frontend communicates with backend via REST APIs:
/recommend → Travel suggestions engine
/chat → AI-style chatbot responses
Implemented JSON-based request/response flow
5. CORS Configuration
Enabled CORS in backend to allow frontend requests
Ensured cross-origin communication works smoothly in development environment
💡 Features Implemented
✈️ Travel Recommendation Engine

Users can filter destinations based on:

Weather preference (warm / cold / hot)
Budget level (low / medium / high)
Flight cost (low / medium / high)

Backend returns matching destinations dynamically.

🤖 Chatbot Assistant (Mock AI Layer)
Accepts user travel queries
Provides contextual responses for destinations like Bali, Tokyo, Thailand, and Dubai
Acts as a basic travel assistant for user engagement
🛠️ Technologies Used
Node.js
Express.js
Docker
Nginx (frontend container)
HTML, CSS, JavaScript
REST APIs
Docker Networking
🧠 Key Learnings (DevOps Perspective)
How to containerize frontend and backend services independently
How microservices communicate using Docker networks
Importance of API design for system integration
Role of CORS in frontend-backend communication
Difference between UI logic and backend business logic
How real SaaS applications are structured for deployment
🚧 Current Status

✔ Backend API developed and containerized
✔ Frontend UI converted into SaaS-style dashboard
✔ Chatbot API integrated
✔ Travel recommendation engine implemented
✔ Multi-container Docker setup working locally
✔ API communication established between services