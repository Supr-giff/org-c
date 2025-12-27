# org-c chatbot
A chatbot which will be benificial for customre support with AI-powered custumization in furture update built with nestJS in NX monorepository.

This is a comprehensive README.md that captures my entire journey from the initial Nx workspace creation to the implementation of the Prometheus monitoring.

This project is a professional-grade Chatbot API built using a Monorepo architecture. It demonstrates the separation of concerns by keeping the "Brain" (Logic) in a library and the "Mouth" (API) in an application, all while being monitored by Prometheus.
### 🏗️ Project Evolution (What we built)

   #### 1. Nx Workspace: Created a scalable Nx Workspace to manage all code in one place.

   #### 2. NestJS API: Built a NestJS service (chatbot-api) to handle all incoming user requests.

  #### 3. Core Logic Library: Isolated the bot's "brain" into a shared library (chatbot-logic) for better reusability.

   #### Live Monitoring: Integrated Prometheus to track system health and message traffic in real-time.

## 🚀 Getting Started (For New Machines)
### 1. Prerequisites
Ensure you have Node.js (v18+) and npm installed.

### 2. Installation
Clone the repository and install the dependencies:<br>
**Bash**<br>
git clone https://github.com/Supr-giff/org-c.git
cd org-c
npm install

### 3. Running the Application

To start the chatbot server:<br>
**Bash**<br>
npx nx serve chatbot-api
<br>
The server will start at http://localhost:3000/api.
## 📡 API Reference
Chatbot Endpoints<br>
MMethod,URL,Description
GET,/api/chat,Health check to see if the bot is online.
POST,/api/chat/ask,Interact with the bot. Expects JSON body.

Example POST Body:
JSON

{
  "userMessage": "hello bot"
}

Monitoring Endpoint
Method,URL,Description
GET,/api/metrics,"View raw Prometheus metrics (CPU, RAM, Message Counts)."

## 🛠️ Commands Used (Development History)

For reference, here are the core commands used to build this workspace:

    Create Workspace: npx create-nx-workspace@latest org-c

    Generate Library: npx nx g @nx/js:library chatbot-logic --directory=libs/chatbot-logic

    Install Monitoring: npm install @willsoto/nestjs-prometheus prom-client


## 📊 Custom Metrics

We have implemented a custom Prometheus Counter named chatbot_messages_total.

    Every time a successful POST is made to /ask, the counter increments by 1.

    You can find this metric by searching for it in the /api/metrics page.

## 📊 Custom Metrics

We have implemented a custom Prometheus Counter named chatbot_messages_total.

    Every time a successful POST is made to /ask, the counter increments by 1.

    You can find this metric by searching for it in the /api/metrics page.
