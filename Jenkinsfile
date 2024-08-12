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
            }
        }

        stage('Deploy') {
            steps {
                // Start the application in the background and ensure it continues running after Jenkins finishes
                sh 'nohup npm start > app.log 2>&1 & echo $! > .pidfile'
            }
        }
    }

    post {
        always {
            // Optional: Clean up workspace. Be careful not to remove logs or PID file if you need them.
            cleanWs()
        }
    }
}
