pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Backend') {
            steps {
                dir('backend') {
                    sh 'npm install'
                }
            }
        }

        stage('Test Backend') {
            steps {
                dir('backend') {
                    sh 'node index.js & sleep 5'
                }
            }
        }

        stage('Build Docker Images') {
            steps {
                sh 'docker build -t travel-backend ./backend'
                sh 'docker build -t travel-frontend ./frontend'
            }
        }

        stage('Run Backend Container Test') {
            steps {
                sh 'docker run -d -p 3001:3000 --name backend-test travel-backend'
                sh 'sleep 5'
                sh 'curl http://localhost:3001'
            }
        }

        stage('Run Frontend Container Test') {
            steps {
                steps {
                    sh 'docker run -d -p 8080:80 --name frontend-test travel-frontend'
                    sh 'sleep 5'
                    sh 'curl http://localhost:8080'
                }
            }
        }

        stage('Cleanup') {
            steps {
                sh 'docker rm -f backend-test frontend-test || true'
            }
        }
    }
}