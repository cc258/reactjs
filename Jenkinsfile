pipeline {
    agent {
        docker {
            image 'node'
            args '-p 3000:3000' 
        }
    }
    environment {
        HOME = '.'
    }
    stages {
        stage('Build') {
            sh 'echo "Start"'
            sh 'npm install --legacy-peer-deps'
        }
    }
}