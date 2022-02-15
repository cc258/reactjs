pipeline {
    agent {
        docker {
            image 'node:14-alpine'
            args '-p 3000:3000' 
        }
    }
    environment {
        HOME = '.'
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install --legacy-peer-deps' 
            }
        }
    }
}