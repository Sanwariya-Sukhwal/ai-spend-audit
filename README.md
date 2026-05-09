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


# AI Spend Audit - Day 2

##  Overview

Day 2 focused on building the Spend Input Form for the AI Spend Audit system.

This form allows users to enter details about their AI tools usage, spending, team size, and use cases. The data is persisted locally and prepared for backend processing.


## Goals Achieved

- Built AI Spend Input Form UI
- Added tool selection dropdown
- Added dynamic plan selection based on tool
- Implemented form validation
- Fixed UX issue (plan reset on tool change)
- Added localStorage persistence
- Improved UI with Tailwind CSS
- Added better input types and dropdowns

---

##  Features Implemented

### 1. Tool Selection
Users can select AI tools like:
- ChatGPT
- Claude
- Cursor
- GitHub Copilot
- Gemini


### 2. Plan Selection (Dynamic)
Plans change based on selected tool:
- ChatGPT → Plus / Team / Enterprise
- Cursor → Hobby / Pro / Business
- Claude → Free / Pro / Team


### 3. Form Inputs
- Monthly Spend (Number input)
- Number of Seats
- Team Size
- Use Case (Dropdown)


### 4. Form Validation
Prevents empty submissions:
- Tool is required
- Plan is required


### 5. LocalStorage Persistence
Form data is saved in browser:
- Data remains after refresh
- Improves user experience


### 6. UX Improvements
- Reset plan when tool changes
- Gradient background UI
- Glassmorphism card design
- Better button styling

##  Tech Stack Used

### Frontend
- React.js (Vite)
- Tailwind CSS
- JavaScript (ES6)

##  Folder Structure (Day 2)
src/
├── pages/
│ └── AuditForm.jsx
├── components/
├── data/
└── App.jsx


## Key Learning

- How to manage controlled forms in React
- How to persist state using localStorage
- How to build dynamic dropdowns
- How to improve UX with small logic fixes
- Importance of clean UI in SaaS products

---

##  Known Issues

- Backend integration pending (Day 3)
- No audit logic yet
- No API connection yet

---

## Next Steps (Day 3)

- Build Audit Engine (Spring Boot backend)
- Create pricing rules logic
- Build API endpoint `/api/audit`
- Connect frontend with backend
- Generate savings calculations

---

##  Summary

Day 2 successfully delivered a **production-style input form** with good UX, validation, and persistence.

This is the core input layer of the AI Spend Audit system.


# AI Spend Audit - Day 3

## Overview

Day 3 focused on building the core Audit Engine for the AI Spend Audit application.

This is the main business logic layer of the project. The application now analyzes user-entered AI tool subscriptions and generates cost-saving recommendations using rule-based logic.

The entire audit flow is currently handled on the frontend using React and JavaScript without backend integration.


# Day 3 Goals Achieved

- Built rule-based audit engine
- Created pricing data configuration
- Added savings calculation logic
- Generated recommendations dynamically
- Built audit results page
- Added React Router navigation
- Connected form → audit engine → results flow
- Improved UI and UX


# Application Flow

```text
User Form
   ↓
auditEngine.js
   ↓
Recommendation Logic
   ↓
Savings Calculation
   ↓
Results Page
```



# Features Implemented

## 1. Rule-Based Audit Engine

Created:

text
src/utils/auditEngine.js

The audit engine:
- analyzes current AI tool usage
- applies business rules
- generates recommendations
- calculates savings

Examples:
- ChatGPT Team for 2 users → recommend Plus plan
- Cursor Business for small teams → recommend Pro
- GitHub Copilot Business for small teams → recommend Individual



## 2. Pricing Configuration

Created:
text
src/data/pricing.js


Contains centralized pricing data for:
- ChatGPT
- Claude
- Cursor
- Gemini
- GitHub Copilot

This improves maintainability and scalability.


## 3. Savings Calculation

The audit engine calculates:
- Monthly savings
- Annual savings
- Optimization opportunities

Example:

text
Monthly Savings: $20
Annual Savings: $240


## 4. Recommendation System

Generated recommendations based on:
- team size
- seats
- monthly spending
- selected plan
- tool usage

Example recommendation:

text
Switch to ChatGPT Plus


## 5. Results Page

Created:
text
src/pages/Results.jsx


Displays:
- current tool
- current plan
- recommendation
- savings
- reasoning
- risk level


## 6. React Router Navigation

Added navigation flow:

text
AuditForm → Results Page


Used:
- useNavigate()
- useLocation()

---

## 7. LocalStorage Persistence

Form data continues to persist after refresh using:
- localStorage

This improves user experience.



# Tech Stack Used

## Frontend
- React.js (Vite)
- React Router DOM
- Tailwind CSS
- JavaScript (ES6)



# Folder Structure (Day 3)

text
src/
│
├── pages/
│   ├── AuditForm.jsx
│   └── Results.jsx
│
├── utils/
│   └── auditEngine.js
│
├── data/
│   └── pricing.js
│
├── router/
│   └── AppRouter.jsx
│
└── App.jsx

# Business Logic Examples

## ChatGPT Rule

text
If Team plan is used for <= 2 users,
recommend Plus plan.


## Cursor Rule

text
If Business plan is used for a small team,
recommend Cursor Pro.


## GitHub Copilot Rule

text
If Business plan is used for <= 3 users,
recommend Individual plan.

# Key Learning

- Building rule-based recommendation systems
- React Router navigation
- Passing state between pages
- Business logic implementation
- Cost optimization calculations
- Dynamic UI rendering
- Frontend architecture planning


# Current Status

## Completed
- Dynamic form UI
- Audit engine
- Recommendation logic
- Savings calculations
- Results page
- Router navigation

## Pending
- Backend integration
- Database storage
- API endpoints
- Authentication
- PDF export
- Charts/dashboard



# Next Steps (Day 4)

- Connect Spring Boot backend
- Create `/api/audit` endpoint
- Store audit reports in database
- Add charts and analytics
- Generate downloadable PDF reports
- Add authentication system


# Summary

Day 3 successfully delivered the core functionality of the AI Spend Audit system.

The application can now:
- analyze AI subscription spending
- generate optimization recommendations
- calculate savings opportunities
- display detailed audit reports

This transforms the project from a simple form application into a functional SaaS-style audit platform.
