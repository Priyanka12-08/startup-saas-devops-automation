# Startup SaaS DevOps Automation

## Project Overview
This project simulates a real-world freelance DevOps engagement where a startup requires automated deployment of a web application on AWS.

## Client Problem
The client currently deploys manually on EC2 with no CI/CD, no scalability, and no environment separation.

## Proposed Solution
- Containerize application using Docker
- Provision AWS infrastructure using Terraform
- Deploy using ECS Fargate
- Implement CI/CD using GitHub Actions
- Support staging and production environments

## Tech Stack
- AWS (ECS, ECR, ALB, CloudWatch)
- Terraform
- Docker
- GitHub Actions

## Current Status
Day 1: Local app setup and containerization complete
