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
                // Start the application
                sh 'npm start &'
            }
        }
    }

}
