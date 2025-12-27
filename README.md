# 🤖 Org-C Chatbot

A professional-grade chatbot API built with NestJS inside an Nx Monorepo. This project is designed for customer support, featuring a "Brain vs. Mouth" architecture where the logic is separated from the API for maximum scalability.
🏗️ Project Evolution

## Four key stages of project:
    1. Monorepo Foundation: Set up an Nx Workspace to keep all code organized and scalable.

    2. The Mouth (API): Built a NestJS service to handle user requests and communication.

    3. The Brain (Logic): Created a Shared Library to hold the chatbot's decision-making logic.
    
    4. Health Tracking: Added Prometheus to monitor system performance and message counts in real-time.

# 🚀 Getting Started
### 1. Prerequisites<br>

    **Node.js (v18 or higher)
    npm**
<br>
### 2. Installation

Copy and run these commands in your terminal:
<br>**Bash**<br>

**git clone https://github.com/Supr-giff/org-c.git
cd org-c
npm install**
<br>

# 3. Running the App<br>

To start the chatbot server, run:
<br>**Bash**<br>

**npx nx serve chatbot-api**
<br>
The server will be live at: http://localhost:3000/api
# 📡 API Reference
Chatbot Endpoints
Method	URL	Description
GET	/api/chat	Check if the bot is online.
POST	/api/chat/ask	Send a message to the bot.

Example Request Body:
JSON

{
  "userMessage": "Hello bot!"
}

Monitoring Endpoint
Method	URL	Description
GET	/api/metrics	View system health (CPU, RAM, and Message counts).
# 📊 Monitoring & Metrics

We use a custom Prometheus Counter to track usage:

    Metric Name: chatbot_messages_total

    How it works: Every time someone successfully uses the /ask endpoint, this number goes up by 1. This helps us track how busy the bot is.

# 🛠️ Development History

If you want to recreate this workspace, these were the core commands used:

## Create the project:
<br>**Bash**<br>

**npx create-nx-workspace@latest org-c**
<br>
Generate the logic library:
<br>**Bash**<br>

**npx nx g @nx/js:library chatbot-logic --directory=libs/chatbot-logic**
<br>

## Install monitoring tools:
<br>**Bash** <br>
**npm install @willsoto/nestjs-prometheus prom-client**
<br>
