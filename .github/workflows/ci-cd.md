# The initial pipeline code


name: TravelOps CI/CD Pipeline

on:
  push:
    branches:
      - main
      - master

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Build Backend Docker Image
        run: docker build -t travel-backend ./app/backend

      - name: Build Frontend Docker Image
        run: docker build -t travel-frontend ./app/frontend

      - name: Pipeline Complete
        run: echo "Build completed successfully 🚀"