📅 Day 1 – Project Setup & Application Containerization
🎯 Objective

The goal of Day 1 was to set up the initial project structure, create a sample full-stack application (frontend + backend), and prepare it for containerization as part of a real-world DevOps workflow.

🧩 What was done
1. Project Structure Setup

Created a clean and scalable folder structure to simulate a real production-grade DevOps project:

app/frontend → Frontend application
app/backend → Backend API service
infra/ → Infrastructure as Code (Terraform – upcoming)
docs/ → Project documentation
.github/workflows/ → CI/CD pipelines (to be added later)

2. Backend Setup (Node.js + Express)
Initialized Node.js backend application
Created a simple Express server
Implemented basic API endpoints:
/ → Health check route
/api → Sample API response

📌 Purpose: Simulate a real backend service that will be deployed in AWS.

3. Frontend Setup (Basic UI)
Created a simple frontend using HTML
Added API integration to communicate with backend service
Verified frontend-backend communication locally

📌 Purpose: Simulate a real client-facing application.

4. Node.js Project Initialization
Initialized package.json using npm init -y
Installed required dependencies (express)

Configured start script:

"start": "node index.js"
5. Containerization (Docker Setup Started)
Created Dockerfile for backend service
Defined runtime environment using Node.js base image
Exposed application port (3000)
Prepared backend for container-based deployment

📌 Purpose: Enable consistent deployment across environments.

6. Local Testing

Verified backend runs successfully using:

node index.js
Verified frontend loads and connects to backend API
Ensured application works in local development environment
🛠️ Tech Stack Used
Node.js
Express.js
HTML (Frontend)
npm
Docker (setup initiated)


🧠 Key Learnings
How to structure a DevOps project like a real production system
Importance of separating frontend and backend services
Basics of containerizing applications
Understanding how applications are prepared for cloud deployment
Importance of reproducible environments for DevOps workflows


🚧 Current Status

✔ Project structure created
✔ Backend API implemented
✔ Frontend UI created
✔ Local integration tested
✔ Node project initialized
⏳ Docker image build and full containerization (next step)


✅ End of Day 1 Checklist

✔ Backend API running
✔ Frontend running
✔ Both Dockerized
✔ Repo structure created
✔ Code pushed to GitHub
✔ README 