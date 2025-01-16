pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'movie-dating-frontend'
        DOCKER_TAG = '${BUILD_NUMBER}'
        DB_CREDS = credentials('DB_CREDENTIALS')
        VITE_API_URL = credentials('${VITE_API_URL}')
        VITE_WEBSOCKET = credentials('${VITE_WEBSOCKET}')
        VITE_TMDB_API_URL = credentials('${VITE_TMDB_API_URL}')
        VITE_TMDB_API_KEY = credentials('${VITE_TMDB_API_KEY}')
    }

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                sh "docker build --build-arg API_URL=${VITE_API_URL} --build-arg WEBSOCKET=${VITE_WEBSOCKET} --build-arg TMDB_API_URL=${VITE_TMDB_API_URL} --build-arg TMDB_API_KEY=${VITE_TMDB_API_KEY} -t ${DOCKER_IMAGE}:${DOCKER_TAG} ."
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
                sh "docker stop ${DOCKER_IMAGE} || true"
                sh "docker rm ${DOCKER_IMAGE} || true"

                sh """
                    docker run d \
                    --name ${DOCKER_IMAGE} \
                    -p 80:80 \
                    -e VITE_API_URL=${VITE_API_URL} \
                    -e VITE_WEBSOCKET=${VITE_WEBSOCKET} \
                    -e VITE_TMDB_API_URL=${VITE_TMDB_API_URL} \
                    -e VITE_TMDB_API_KEY=${VITE_TMDB_API_KEY} \
                    -restart unless-stopped \
                    ${DOCKER_IMAGE}:${DOCKER_TAG}
                """
            }
        }
    }

    post {
        success {
            echo 'Pipeline succeeded!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}