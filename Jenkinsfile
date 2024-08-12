pipeline {
    agent any

    stages {

        stage('Install Dependencies') {
            steps {
                // Install Node.js dependencies
                sh 'npm install'
            }
        }


        stage('Deploy') {
            steps {
                // Start the application
                sh 'npm start'
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
