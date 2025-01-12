# Personal Financial Tracker Project

## Tech Stack

Our project leverages a modern and scalable tech stack designed for robust performance, ease of deployment, and seamless user experience.

### Backend:

- **Framework**: Django (Python)
- **Database**: PostgreSQL, hosted on Amazon RDS for high availability and reliability
- **Containerization**: The Django app will be containerized using Docker for consistent deployment across environments

### Frontend:

- **Framework**: React, hosted on AWS Amplify, providing continuous deployment and easy scalability
- **Styling**: Tailwind CSS (or other preferred UI framework) for a clean, responsive design

### Deployment:

- **Backend Deployment**: The Dockerized backend will be deployed on AWS ECS/Fargate for managed container orchestration
- **Database Deployment**: PostgreSQL instance on Amazon RDS
- **Frontend Deployment**: React app deployed via AWS Amplify with automated CI/CD pipelines

## Getting Started

### Prerequisites

Before getting started, make sure you have the following installed:

- Python 3.x
- Node.js and npm
- Docker
- AWS CLI (if you plan to deploy locally)