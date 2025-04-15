# SIT323-2025-Prac6P: Docker and Kubernetes Setup

This project is part of Task 6.1P for SIT323 – Cloud-Native Application Development. The goal was to deploy a simple Node.js calculator microservice to a local Kubernetes cluster using Docker and Minikube.

## Technologies Used
- Node.js
- Express.js
- Docker
- DockerHub
- Kubernetes (via Minikube)
- kubectl CLI
- Visual Studio Code
- PowerShell (Windows)

## What the App Does
The app is a basic calculator API that supports the following operations via URL parameters:
- `/add?num1=10&num2=5` → `{"result":15}`
- `/divide?num1=10&num2=5` → `{"result":2}`

Each operation is handled by a RESTful endpoint in the Node.js app.

 ## Steps Followed

### 1. Dockerize the Node.js App
- Created a Dockerfile to build the image.
- Built and tested the image locally.
- Tagged and pushed the image to DockerHub:

  docker tag node-app:v1 s223060317/node-app:v1  
  docker push s223060317/node-app:v1

### 2. Kubernetes Cluster Setup
- Installed Minikube and kubectl on Windows.
- Started the Minikube cluster using Docker:

  minikube start --driver=docker

### 3. Kubernetes Deployment
- Created deployment.yaml and service.yaml files inside the kube/ folder.
- Applied the Kubernetes configs:

  kubectl apply -f kube/

### 4. Verify Deployment
- Checked pod and service status:

  kubectl get pods  
  kubectl get svc

- Opened the app in the browser using:

  minikube service node-app-service

## ✅ Sample Output

Accessing from browser:

http://127.0.0.1:51297/add?num1=10&num2=5  
→ { "result": 15 }

http://127.0.0.1:51297/divide?num1=10&num2=5  
→ { "result": 2 }

## How to Run

1. Clone this repo:

   git clone https://github.com/s223060317/sit323-2025-prac6p.git  
   cd sit323-2025-prac6p

2. Start Minikube:

   minikube start --driver=docker

3. Deploy to Kubernetes:

   kubectl apply -f kube/

4. Open in browser:

   minikube service node-app-service

