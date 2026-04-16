pipeline {
    agents any
    stages {
        stage('Checkout'){
            steps {
                git branch : 'main', url 'https://github.com/Priyanka12-08/startup-saas-devops-automation'
            }
        }

        stage('Install Backend'){
            steps{
                dir('/app/backend')
                sh 'npm install'
            }
        }

        stage('Test Backend'){
            steps{
                dir('/app/backend')
                sh 'node index.js & sleep 5'
            }
        }

        stage('Build Docker Images'){
            steps{
                sh 'docker build -t travel-backend ./app/backend'
                sh 'docker build -t travel-frontend ./app/frontend'
            }
        }

        stage('Validate Containers'){
            steps {
                sh 'docker run -d -p 3001:3000 travel-backend'
                sh 'sleep 5'
                sh 'curl http://localhost:3001'
            }
        }
    }
}