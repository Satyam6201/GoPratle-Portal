# 🚀 GoPratle Portal - Full-Stack Event Requirement System

GoPratle Portal is a premium, high-performance MERN stack application designed for seamless event requirement management. It features a sophisticated multi-step form built with Next.js 14, Framer Motion for high-end animations, and a robust Express/MongoDB backend.



## 🌐 Live Demo & Repository
- **Live Application:** [https://event-orcin-one.vercel.app/](https://event-orcin-one.vercel.app/)
- **GitHub Repository:** [https://github.com/Satyam6201/GoPratle-Portal](https://github.com/Satyam6201/GoPratle-Portal)

## ✨ Key Features
- **Modern Multi-Step UI:** A fluid 3-step requirement gathering process with real-time progress tracking.
- **Premium Animations:** Integrated with Framer Motion for spring-physics transitions, layout morphing, and circular progress rings.
- **Category-Specific Logic:** Dynamic form fields that adapt based on the selected event category.
- **Robust API Integration:** Secure communication with an Express.js backend using Axios with centralized error handling.
- **Responsive Glassmorphism:** A high-end UI designed with Tailwind CSS, featuring backdrop blurs and radial gradients.

## 🛠️ Tech Stack
- **Frontend:** Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion, Axios.
- **Backend:** Node.js, Express.js, Cors, Dotenv.
- **Database:** MongoDB Atlas (Mongoose).
- **Deployment:** Vercel (Frontend), Render (Backend).

## 📂 Project Structure

### Frontend (`/frontend`)
```text
src/
├── app/
│   ├── layout.tsx       # Root layout & providers
│   └── page.tsx         # Main multi-step form logic
├── components/
│   └── forms/
│       ├── Step1Basics.tsx         # Event basics info
│       ├── Step2CategoryFields.tsx # Dynamic category details
│       └── Step3Review.tsx         # Data review & submission
├── lib/
│   └── axios.ts         # Centralized Axios instance with interceptors
└── styles/
    └── globals.css      # Custom Tailwind configurations

Backend (/backend)
Plaintext
server/
├── config/
│   └── db.js            # MongoDB connection logic
├── models/
│   └── Requirement.js   # Mongoose schema for event data
├── routes/
│   └── requirement.routes.js # API endpoints
├── .env                 # Environment variables
└── server.js            # Express application entry point
```

## 🚀 Getting Started

### Prerequisites
* **Node.js**: version 18 or higher.
* **MongoDB Atlas**: An active cluster and connection string.

### Installation

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/Satyam6201/GoPratle-Portal.git](https://github.com/Satyam6201/GoPratle-Portal.git)
   cd GoPratle-Portal
   ```
2  **Setup Backend:**
```
Bash
cd backend
npm install
# Create a .env file and add your MONGODB_URI and PORT
npm start
```

3  **Setup Frontend:**
```
Bash
cd frontend
npm install
# Create a .env.local and add NEXT_PUBLIC_API_URL=http://localhost:8080
npm run dev
