📄 Jenkins CI/CD Pipeline – TravelOps AI Project
🚀 Overview

This phase of the TravelOps AI project focused on building a Jenkins-based CI/CD pipeline to automate the build and testing workflow for a full-stack travel recommendation application.

The goal was to simulate a real-world DevOps environment where Jenkins orchestrates application builds, Docker image creation, and deployment steps.

🎯 Objectives
Set up Jenkins for CI/CD automation
Connect Jenkins with GitHub repository
Build backend and frontend applications
Containerize services using Docker
Automate build pipeline execution
Prepare deployment workflow for future AWS integration
🧱 CI/CD Architecture
GitHub Repository
       ↓
Jenkins Pipeline
       ↓
Build Stage (Backend + Frontend)
       ↓
Docker Image Creation
       ↓
Container Execution (Local Testing)
       ↓
Deployment Ready Artifacts

⚙️ Tech Stack
Jenkins (CI/CD automation)
Git & GitHub (source control)
Docker (containerization)
Node.js (backend service)
HTML/CSS/JS (frontend)
Ubuntu (Jenkins host environment)

📁 Pipeline Structure
pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Backend') {
            steps {
                sh 'docker build -t travel-backend ./backend'
            }
        }

        stage('Build Frontend') {
            steps {
                sh 'docker build -t travel-frontend ./frontend'
            }
        }

        stage('Test Containers') {
            steps {
                sh 'docker ps'
            }
        }
    }
}


🧪 Pipeline Workflow
Developer pushes code to GitHub
Jenkins automatically triggers pipeline
Code is pulled from repository
Backend and frontend are built
Docker images are created
Containers are tested locally
Pipeline completes execution

🔐 Key DevOps Concepts Demonstrated

Continuous Integration (CI)
Automated build pipelines
Docker-based application packaging
GitHub–Jenkins integration
Infrastructure-as-Code mindset (pipeline-as-code)

⚠️ Known Issues (Work in Progress)

During setup and testing, some environment-related issues were encountered:

Docker CLI availability inside Jenkins container
Node.js/npm dependency execution issues
Jenkins plugin configuration mismatches
Host-to-container Docker communication setup

These are part of real-world DevOps debugging scenarios and will be resolved in the next iteration.

💡 What This Project Demonstrates

Even in its current state, this pipeline demonstrates:

✔ Real CI/CD pipeline design
✔ Multi-service application build automation
✔ Docker-based workflow thinking
✔ DevOps troubleshooting experience
✔ Production-style architecture planning

🚀 Next Improvements (Planned)
Fix Docker access inside Jenkins agent
Resolve dependency execution issues (Node/npm)
Add Docker Hub integration for image publishing
Integrate AWS deployment (ECS/Fargate)
Add webhook-based auto-trigger pipeline
🧠 Summary

This Jenkins pipeline represents a real-world DevOps setup in progress, simulating challenges commonly faced in production environments such as dependency resolution, container execution, and CI/CD orchestration.