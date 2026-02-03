# 🏗️ Small Business Construction Dashboard

A frontend-focused React application designed to help **independent contractors, small construction businesses, and solo entrepreneurs** manage their operations in one place.

This project emphasizes **clarity, usability, and real-world business logic**, built entirely on the frontend using mock JSON data to simulate a production-ready dashboard experience.

---

## 🚀 Project Overview

Small construction businesses and “one-man armies” often rely on scattered tools to track jobs, clients, invoices, and expenses. This application acts as a **lightweight business operations hub**, providing a clear overview of day-to-day work without enterprise-level complexity.

The app is built to feel like a real SaaS product while remaining frontend-only and portfolio-focused.

---

## 🎯 Goals

- Build a realistic, multi-page React application
- Practice client-side routing with protected routes
- Model real-world business data relationships
- Learn and implement data visualization using Recharts
- Demonstrate clean component architecture and UI logic
- Create a strong, interview-ready portfolio project

---

## 🧱 Tech Stack

- **React** – Component-based UI
- **react-router-dom** – Client-side routing
- **Recharts** – Data visualization and analytics
- **CSS Modules** – Scoped and maintainable styling
- **Mock JSON Data** – Simulated backend responses

---

## 🌐 Application Structure

### Public (Pre-Login)

#### Landing Page
- Product overview and value proposition
- Call-to-action buttons (Login / Get Started)

#### Navigation Bar
- Home
- About
- Contact
- Login

Navigation links smoothly scroll to their respective sections.

#### About Section
Explains the mission:
- Built for small businesses and solo contractors
- Simple, practical, and focused
- No unnecessary enterprise features

#### Contact Section
- Basic contact form (UI only)

---

### Authentication

- Mock login system
- Authentication state stored locally
- Protected routes prevent unauthorized access to the app

---

## 📊 App Layout (Post-Login)

Once logged in, users enter the main application layout, which includes:
- Persistent sidebar navigation
- Top bar with user information and logout option

---

## 🧠 Dashboard (Main Hub)

The dashboard provides a high-level snapshot of the business through **clickable widgets**.

### Dashboard Widgets
Each widget displays key metrics and navigates to a detailed page.

- Current Projects
- Clients
- Invoices
- Crew Members
- Income

All values are dynamically derived from application data.

---

## 📁 Feature Pages

### Projects
- View all projects and job sites
- Track status (planned / active / completed)
- Monitor budgets and progress
- Individual project detail pages

---

### Clients
- Client contact information
- Total revenue per client
- Associated projects

---

### Invoices
- Paid, unpaid, and overdue invoices
- Due dates and amounts
- Filter invoices by status

---

### Expenses
- Track expenses by category (materials, labor, tools)
- Associate expenses with projects
- View monthly and category-based breakdowns

---

### Crew
- Supports solo contractors and small teams
- Crew roles and project assignments
- Simple labor overview

---

### Analytics / Profit
- Revenue vs expenses charts
- Monthly profit trends
- High-level business insights

---

## 🔁 Data Relationships

The application models realistic business relationships:

- Clients have many projects  
- Projects have many invoices and expenses  
- Invoices contribute to revenue  
- Expenses reduce profit  

All metrics and charts are calculated from this data rather than hardcoded values.

---

## 📊 Data Visualization

Recharts is used to display:
- Profit over time
- Expenses by category
- Paid vs unpaid invoices

Charts are used to enhance understanding and decision-making, not just visual appeal.

---

## 🎨 Design Principles

- Clean, readable layouts
- Mobile-friendly for on-site use
- Clear status indicators and hierarchy
- Focus on usability and clarity over excessive styling

---

## 🚫 Out of Scope

The following features are intentionally excluded to maintain focus:

- Real payment processing
- Payroll systems
- Email sending
- Backend authentication
- Multi-user permissions

---

## 🏆 Portfolio Value

This project demonstrates:
- Real-world application structure
- Client-side routing and protected routes
- Complex state and derived calculations
- Dashboard and data visualization patterns
- Thoughtful product and UX design

---

## 🧭 Success Criteria

The project is considered successful if:
- The app is intuitive without documentation
- All dashboard data is dynamically derived
- Navigation feels smooth and intentional
- The product feels realistic despite using mock data

---

## 📌 Notes

This project is intentionally frontend-only. The architecture allows for easy replacement of mock data with a real API or backend service in the future.
