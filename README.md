# kidney-api

# Express REST API - Kidney Health Tracker

A simple REST API built with Node.js and Express while learning how APIs work.

## What I Learned
- How GET, POST, PUT, DELETE requests work
- Building a REST API with Express
- Sending and receiving JSON data

## How to Run
1. Clone the repo
2. Run `npm install`
3. Run `node index.js`
4. Open `http://localhost:3000`

## Routes
| Method | Route | What it does |
|--------|-------|--------------|
| GET    | /     | Get kidney info for a user |
| POST   | /     | Add a kidney for a user |
| PUT    | /     | Mark all unhealthy kidneys as healthy |
| DELETE | /     | Remove all unhealthy kidneys |
