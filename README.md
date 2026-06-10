# PopX Account UI (Login & Registration)

A production‑ready authentication and account management interface built with
**React 19**, **TypeScript 6**, **React Router 7**, and **Tailwind CSS 4**.
Includes form validation, accessible components, and a scalable routing
architecture ready to integrate with real backend services.

## ✨ Features

- **Login & Create Account** – Fully controlled forms with client‑side validation.
- **Account Settings** – Ready for dynamic user profile data.
- **404 Handling** – Catch‑all route for undefined URLs.
- **Code Splitting** – Route‑based lazy loading for faster initial load.
- **Type‑Safe Routing** – Centralised path constants prevent magic strings.
- **Accessible UI** – Semantic HTML, ARIA attributes, and proper disabled states.
- **Reusable Field Components** – Outlined inputs and radio groups shared across forms.
- **Tailwind CSS** – Utility‑first styling with a consistent design system.
- **ESLint + TypeScript strict** – High code quality and maintainability.

## 📦 Tech Stack

| Category | Technology |
|----------|-------------|
| Framework | React 19 |
| Language | TypeScript 6 |
| Routing | React Router 7 |
| Styling | Tailwind CSS 4 |
| Build Tool | Vite 8 |
| Linting | ESLint, typescript‑eslint |

## 🚀 Getting Started

### Prerequisites

- **Node.js** >= 18 (or the latest LTS)
- **npm** (comes with Node) or **yarn/pnpm**

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd login-ui

    Install dependencies:
    bash

    npm install

    Start the development server:
    bash

    npm run dev

    The app will open at http://localhost:5173 (default Vite port).

Available Scripts
Command	Description
npm run dev	Start development server with hot reload
npm run build	Type‑check and build for production
npm run preview	Preview the production build locally
npm run lint	Run ESLint to check code quality
📁 Project Structure
text

src/
├── components/          # Reusable UI components
│   ├── Home.tsx
│   ├── Login.tsx
│   ├── CreateAccount.tsx
│   ├── AccountSettings.tsx
│   ├── NotFound.tsx
│   ├── OutlinedField.tsx
│   ├── RadioGroupField.tsx
│   └── ...
├── constants/           # App‑wide constants (form fields, options)
├── routes/              # Route definitions and configuration
│   ├── paths.ts         # Centralised path constants + AppPath type
│   ├── routeConfig.tsx  # Route objects with lazy loading
│   └── AppRoutes.tsx    # useRoutes wrapper with Suspense
├── utils/               # Helper functions (validation, etc.)
├── App.tsx              # Root component with router
├── main.tsx             # Entry point
└── index.css            # Tailwind directives & global styles

🔐 Form Validation

All forms use a shared areFieldsFilled utility that checks required fields.
The Login and Create Account buttons are disabled until the form is valid,
preventing incomplete submissions. Navigation after login/signup only occurs when
validation passes (pattern used in CreateAccount component and recommended for Login).
🧩 Extending the App

    Add a new route
    Add the path to src/routes/paths.ts, lazy‑import the page component,
    and insert a new route object in src/routes/routeConfig.tsx.

    Add real authentication
    Replace console.log in Login and CreateAccount with API calls.
    Store tokens in a React context or state management library.

    Add unit tests
    Use Vitest + React Testing Library – components are already testable because
    they are pure and rely on props/state, not global singletons.

📄 License

This project is open‑source and available under the MIT License.

Built with ❤️ using React, TypeScript, and Vite.
text


This README is tailored to your exact project (based on the `package.json` you shared) and reflects the code quality improvements we discussed. It’s ready to drop into your repo.