pipeline {
    agent any

    tools {
        nodejs 'node-22.5.1'  // Ensure this matches the name in Global Tool Configuration
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/coding-jaguar/demo.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
                sh 'npm install -g pm2'
            }
        }

        stage('Deploy') {
            steps {
                sh 'pm2 start index.js --name "my-app"'
                sh 'pm2 save'
                sh 'pm2 status'
            }
        }
    }
}
