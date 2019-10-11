pipeline {
    agent {
        docker {
            image 'node:8-alpine'
            args '-p 3000:3000'
        }
    }
    stages {
        stage('Setup Project') {
            steps {
                sh 'yarn install'
            }
        }
         stage('Run Lint') {
             steps {
                sh 'yarn lint'
                }
            }
        stage('Unit Tests') {
                    steps {
                        sh 'yarn test'
                    }
                }
    }
}
