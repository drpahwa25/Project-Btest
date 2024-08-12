pipeline {
    agent any

    tools {
        nodejs 'node_22_6_0'  // This should match the name you gave in Global Tool Configuration
    }

    stages {

        stage("Clone Repository"){
            steps {
                git branch: 'main',
                url: "https://github.com/coding-jaguar/demo.git"
        }

        stage('Install Dependencies') {
            steps {
                // Install Node.js dependencies
                sh 'npm install'
                // Install pm2 globally
            }
        }

        stage('Deploy') {
            steps {
                // Start the application using pm2
                // sh 'pm2 start npm --name "my-app" -- run start'
                sh "npm run start"
            }
        }
    }
    }

}
