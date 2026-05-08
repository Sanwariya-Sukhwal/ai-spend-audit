# AI Spend Audit (Credex Assignment)

## Overview
AI Spend Audit is a full-stack web application that helps startups and developers analyze and optimize their monthly spending on AI tools like ChatGPT, Cursor, GitHub Copilot, Claude, and others.

It evaluates current subscriptions and suggests cost-saving alternatives using rule-based logic.


## Objective
- Identify AI tool overspending
- Suggest cheaper or better plans
- Estimate monthly and yearly savings
- Generate shareable audit reports


## Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- Axios
- React Router DOM

### Backend
- Java 17+
- Spring Boot
- Spring Data JPA
- REST APIs

### Database
- PostgreSQL (Supabase)


## Project Structure

### Frontend
src/
 ├── pages/
 ├── components/
 ├── services/
 ├── layouts/
 └── router/

### Backend
controller/
service/
dto/
entity/
repository/


## Current Progress (Day 1)

- React + Vite frontend initialized
- Tailwind CSS configured
- Spring Boot backend setup completed
- PostgreSQL (Supabase) connected successfully
- Backend API tested (/api/health)
- Frontend-backend connection verified


## API Endpoints

### Health Check
GET /api/health

Response:
Backend is working 

## Setup Instructions

### Frontend
cd frontend
npm install
npm run dev

### Backend
cd backend
mvn spring-boot:run


## Key Decisions

- Spring Boot used for backend scalability
- React (Vite) used for fast frontend setup
- Supabase used for easy cloud PostgreSQL
- Rule-based logic used for audit engine (as required)

