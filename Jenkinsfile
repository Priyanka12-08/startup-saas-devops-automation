pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Backend Docker Image') {
            steps {
                sh 'docker build -t travel-backend ./backend'
            }
        }

        stage('Build Frontend Docker Image') {
            steps {
                sh 'docker build -t travel-frontend ./frontend'
            }
        }

        stage('Run Backend Container') {
            steps {
                sh 'docker rm -f backend-test || true'
                sh 'docker run -d -p 3001:3000 --name backend-test travel-backend'
                sh 'sleep 5'
                sh 'curl http://localhost:3001'
            }
        }

        stage('Run Frontend Container') {
            steps {
                sh 'docker rm -f frontend-test || true'
                sh 'docker run -d -p 8080:80 --name frontend-test travel-frontend'
                sh 'sleep 5'
                sh 'curl http://localhost:8080'
            }
        }

        stage('Cleanup') {
            steps {
                sh 'docker rm -f backend-test frontend-test || true'
            }
        }
    }
}