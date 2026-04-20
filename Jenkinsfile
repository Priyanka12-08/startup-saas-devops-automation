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

    }
}