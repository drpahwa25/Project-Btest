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
                script {
                    // Use nvm to install Node.js version
                    sh 'nvm install ${NODE_VERSION}'
                    sh 'nvm use ${NODE_VERSION}'
                    // Install project dependencies
                    sh 'npm install'
                }
            }
        }

        stage('Run Tests') {
            steps {
                // Run your tests (if you have any)
                sh 'npm test'
            }
        }

        stage('Build') {
            steps {
                // Build your application if necessary (optional)
                // sh 'npm run build'
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Start your application using pm2 or any other process manager
                    sh 'pm2 start app.js --name "express-app"'
                    // Optionally, you can use pm2 to restart the app instead
                    // sh 'pm2 restart express-app'
                }
            }
        }
    }
}