#!/bin/bash

# Fail immediately if a command exits with a non-zero status
set -e

# Check if k3d cluster already exists, create if not
if ! k3d cluster list | grep -q "vite-cluster"; then
  echo "Creating k3d cluster..."
  k3d cluster create vite-cluster --agents 1
else
  echo "k3d cluster already exists"
fi

# Ensure kubectl is using the right context for k3d
kubectl config use-context k3d-vite-cluster

# Build the Vite Docker image
echo "Building Vite Docker image..."
docker build -t your-vite-image:latest .

# Load the Vite Docker image into k3d
echo "Loading Vite Docker image into k3d cluster..."
k3d image import your-vite-image:latest -c vite-cluster

# Apply the Kubernetes deployment
echo "Deploying Vite application to k3d..."
kubectl apply -f vite-app-deployment.yaml

# Wait for the pod to be ready
echo "Waiting for Vite pod to be ready..."
kubectl wait --for=condition=ready pod -l app=vite-app --timeout=120s

echo "Vite application is deployed and ready at http://localhost:30001"
