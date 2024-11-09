pipeline {
    agent any
    environment {
        DOCKER_REPO = 'httpyash'
        AWS_REGION = 'ap-south-1'
        K8S_CLUSTER_NAME = 'asterin-cluster'
        GITHUB_CREDENTIALS_ID = 'github-pat'
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'animation-check', url: 'https://github.com/yashshah2311/asterin-world-frontend.git'
            }
        }

        stage('Build and Push Docker Images') {
            steps {
                script {
                    // docker.build("${DOCKER_REPO}/node-backend:${env.BUILD_ID}", './backend').push()
                    docker.build("${DOCKER_REPO}/asterin-world-frontend:${env.BUILD_ID}", './asterin-world-frontend').push()
                }
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                withAWS(credentials: 'aws-credentials-id') {
                    sh '''
                    aws eks --region $AWS_REGION update-kubeconfig --name $K8S_CLUSTER_NAME
                    kubectl apply -f k8s/asterin-world-frontend.yaml
                    '''
                }
            }
        }
    }

    post {
        success {
            echo 'Deployment successful!'
        }
        failure {
            echo 'Deployment failed.'
        }
    }
}
