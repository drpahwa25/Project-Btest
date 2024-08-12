pipeline {
    agent any

    tools {
        nodejs 'node-22.5.1'  // This should match the name you gave in Global Tool Configuration
    }

    stages {

        stage('Install Dependencies') {
            steps {
                // Install Node.js dependencies
                sh 'npm install'
                // Install pm2 globally
                sh 'npm install -g pm2'
            }
        }

        stage('Deploy') {
            steps {
                // Start the application using pm2
                // sh 'pm2 start npm --name "my-app" -- run start'
                sh "npm start"
            }
        }
    }

    post {
        always {
            // Clean up workspace
            cleanWs()
        }
    }
}
