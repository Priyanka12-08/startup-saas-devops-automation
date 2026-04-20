📄 Day 6 – Docker Hub CI/CD Pipeline (TravelOps AI)
🚀 Overview

On Day 6, the TravelOps AI project was upgraded from a basic CI pipeline to a fully automated CI/CD workflow with Docker Hub integration. This step introduces real-world DevOps practices used in production environments, where applications are containerized, versioned, and pushed to a centralized registry for deployment.

🎯 Objectives Completed
Integrated Docker Hub with GitHub Actions
Automated Docker image build process
Pushed backend and frontend images to Docker Hub
Secured credentials using GitHub Secrets
Prepared pipeline for cloud deployment (AWS ECS next step)
🧱 Architecture (Day 6)
GitHub Push
   ↓
GitHub Actions CI/CD
   ↓
Docker Build (Backend + Frontend)
   ↓
Docker Hub Registry
   ↓
Ready for AWS Deployment (ECS/Fargate)
⚙️ Tech Stack Used
GitHub Actions (CI/CD automation)
Docker (containerization)
Docker Hub (image registry)
Node.js backend
Static frontend (HTML/CSS/JS)
🔐 GitHub Secrets Used

To securely push Docker images, the following secrets were configured:

DOCKER_USERNAME → Docker Hub username
DOCKER_PASSWORD → Docker Hub access token/password

These are accessed in the workflow using:

${{ secrets.DOCKER_USERNAME }}
${{ secrets.DOCKER_PASSWORD }}
🧪 CI/CD Pipeline Flow
Code pushed to main branch
GitHub Actions triggers workflow
Docker login using GitHub Secrets
Backend Docker image built
Frontend Docker image built
Images pushed to Docker Hub
Pipeline completes successfully 🚀
📦 Docker Images Generated

After successful execution, the following images are available on Docker Hub:

travel-backend:latest
travel-frontend:latest
📁 Project Structure
startup-saas-devops-automation/
│
├── app/
│   ├── backend/
│   │   ├── Dockerfile
│   │   ├── index.js
│   │   └── package.json
│   │
│   ├── frontend/
│       ├── Dockerfile
│       └── index.html
│
├── .github/
│   └── workflows/
│       └── ci-cd.yml