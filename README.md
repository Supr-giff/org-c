# Org-C: NestJS Chatbot with Nx & Prometheus

This is a comprehensive README.md that captures my entire journey from the initial Nx workspace creation to the implementation of the Prometheus monitoring.

This project is a professional-grade Chatbot API built using a Monorepo architecture. It demonstrates the separation of concerns by keeping the "Brain" (Logic) in a library and the "Mouth" (API) in an application, all while being monitored by Prometheus.
### 🏗️ Project Evolution (What we built)

   #### Nx Workspace: Created a managed monorepo for scaling.

   #### NestJS API: Generated a chatbot-api to handle HTTP requests.

  #### Shared Library: Generated @org/chatbot-logic to house the chatbot's decision-making.

   #### Observability: Integrated Prometheus to track application health and message counts.

## 🚀 Getting Started (For New Machines)
### 1. Prerequisites

Ensure you have Node.js (v18+) and npm installed.
### 2. Installation

Clone the repository and install the dependencies:
Bash

git clone https://github.com/Supr-giff/org-c.git
cd org-c
npm install

### 3. Running the Application

To start the chatbot server:
Bash

npx nx serve chatbot-api

The server will start at http://localhost:3000/api.
## 📡 API Reference
Chatbot Endpoints
Method	URL	Description
GET	/api/chat	Health check to see if the bot is online.
POST	/api/chat/ask	Interact with the bot. Expects JSON body.
