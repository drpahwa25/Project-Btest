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
                // Use pm2 to start the application
                // sh 'pm2 start npm --name "my-app" -- run start'
              
                // // Optionally, show the status of the running processes
                // sh 'pm2 status'
                sh "node index.js"
            }
        }
    }
}
