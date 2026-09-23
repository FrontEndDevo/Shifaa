# 🏥 Shifaa - Modern Medical Healthcare Management System

[![Next.js](https://img.shields.io/badge/Next.js-16.3-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Appwrite](https://img.shields.io/badge/Appwrite-Backend-FD366E?style=for-the-badge&logo=appwrite)](https://appwrite.io/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

Shifaa is an end-to-end medical appointment booking and administrative management platform built with Next.js App Router, Appwrite, and Shadcn UI. It enables patients to register, request appointments with primary care physicians, and allows clinic administrators to verify, schedule, or cancel appointments.

---

## 🌐 Live Demo & Preview

- **Live Demo:** [https://shifaa-pearl.vercel.app](https://shifaa-pearl.vercel.app/)

---

## ✨ Key Features

- **Patient Management:** Multi-step onboarding with profile validation and medical record handling.
- **Appointment Scheduling System:** Interactive booking form with doctor selection and schedule picking.
- **Passkey-Protected Admin Portal:** Secure administrative route with client-side passkey verification to prevent layout flickering.
- **Real-time Analytics Dashboard:** Summary cards tracking total, scheduled, pending, and cancelled medical appointments.
- **Interactive Data Table:** Advanced filtration, custom pagination, and responsive layout built with TanStack Table and Shadcn UI.

- **Persistent Admin Authentication:** Uses AES encryption from the crypto-js library to securely encrypt the admin passkey before storing it in localStorage. This allows returning admins to access the dashboard without re-entering their passkey on every visit.

- **Optimized UX & Performance:** Fully responsive layout with custom loading states and zero dynamic layout shifts.

---

## 🛠️ Tech Stack & Architecture

- **Framework:** Next.js (App Router, Server Components, Server Actions)
- **Language:** TypeScript
- **Backend & Database:** Appwrite Cloud (Databases, Tables, Authentication)
- **UI Components & Styling:** Tailwind CSS, Shadcn UI
- **Form Validation:** React Hook Form, Zod

---

## 📐 Technical Architecture & Trade-offs

During development, several key architectural challenges were solved to optimize performance and user experience:

- **Appwrite Relational Data Population:** Resolved SDK relation limitations by implementing explicit `Query.select(["*", "patient.*"])` pipelines to fetch populated nested objects without making secondary network round-trips.
- **Bulk Update Limitations on Relationships:** Identified Appwrite's restriction on bulk row updates (`updateRows`) for schemas containing relationships, safely refactoring mutation handlers to use direct single-row updates (`updateRow`).
- **Dynamic Page Caching & Hydration:** Forced dynamic route evaluation (`export const dynamic = "force-dynamic"`) and revalidation rules on administrative routes to overcome Next.js 16 production caching defaults and guarantee real-time data freshness.
- **Flicker-Free Passkey Authentication:** Designed client-side passkey verification states (`isChecking` / `isNavigating`) combined with Next.js `loading.tsx` Suspense boundaries to prevent layout shifts during admin access.

---

## 🔒 Security & Data Integrity

- **Passkey Protection:** Admin dashboard routes are gated behind secure passkey verification to prevent unauthorized access.
- **Strict Type Safety:** Zod schemas applied across all forms to guarantee sanitization of medical records, phone numbers, and emergency contact payloads before API transmission.
- **Environment Isolation:** Server-side API keys (`NEXT_APPWRITE_KEY`) are kept isolated from client bundles to prevent privilege escalation.

---

## 📸 Application Screenshots & Key Workflows

---

### 1. Initial Patient Identification (Home Page)

> Clean entry page acting as a lightweight identification step. Collects basic patient details (Name, Email, Phone) to check existing records or initiate a new onboarding process.

<div align="center">
  <img src="./public/assets/screenshots/home.png" alt="Home" width="90%" style="border-radius: 8px;" />
</div>

**Key Features:**

- Smooth client-side validation using React Hook Form and Zod.
- Direct routing logic redirecting returning users or sending new patients to full onboarding.

---

### 2. Patient Onboarding & Registration

> Interactive multi-step form built with **React Hook Form** and **Zod** schema validation. Captures patient details, identification documents, and medical emergency history smoothly.

<div align="center">
  <img src="./public/assets/screenshots/patient-info.png" alt="Patient Registration" width="90%" style="border-radius: 8px;" />
</div>

**Key Features:**

- File upload integration via Appwrite Storage.
- Dynamic input verification and clear client-side validation error messages.

---

### 3. Doctor Selection & Appointment Request

> Intuitive booking interface allowing registered patients to select their primary physician, schedule date and time, and specify medical reasons or allergies.

<div align="center">
  <img src="./public/assets/screenshots/new-appointment-responsive.png" alt="Appointment Form" width="90%" style="border-radius: 8px;" />
</div>

**Key Features:**

- Custom date-time picker and doctor selection components.
- Server-side action submitting structured payload directly to Appwrite Cloud DB.

---

### 4. Admin Authentication & Security

> Client-side passkey verification modal (`PasskeyModal`) ensuring authorized access to administrative routes without server-side layout flickering or hydration shifts.

<div align="center">
  <img src="./public/assets/screenshots/admin-passkey.png" alt="Passkey Verification Modal" width="70%" style="border-radius: 8px;" />
</div>

**Key Features:**

- Custom 6-digit OTP Input slot layout using Shadcn UI.
- Responsive dialog layout optimized for mobile and desktop viewports.

---

### 5. Appointment Confirmation & Success Page

> Dedicated confirmation screen displayed immediately after a successful booking request. Features appointment details, selected doctor, schedule timestamp, and clear next steps for the patient.

<div align="center">
  <img src="./public/assets/screenshots/success-appointment.png" alt="Success Appointment" width="90%" style="border-radius: 8px;" />
  <img src="./public/assets/screenshots/success-appointment-responsive.png" alt="Success Appointment Responsive" width="90%" style="border-radius: 8px;" />
</div>

**Key Features:**

- Dynamic route driven by appointment ID URL parameters.
- Informative UX notifying the patient to expect a confirmation call or email from the clinic receptionist.

---

### 6. Administrative Dashboard & Data Management

> Comprehensive control panel showing real-time appointment metrics (Total, Scheduled, Pending, Cancelled) and an interactive data table powered by **TanStack Table**.

<div align="center">
  <img src="./public/assets/screenshots/admin-dashboard.png" alt="Admin Dashboard" width="90%" style="border-radius: 8px;" />
  <img src="./public/assets/screenshots/admin-table.png" alt="Admin Table" width="90%" style="border-radius: 8px;" />
  <img src="./public/assets/screenshots/admin-responsive.png" alt="Admin Responsive" width="90%" style="border-radius: 8px;" />
</div>

**Key Features:**

- Dynamic relationship population (`Query.select`) to display patient and physician data seamlessly.
- Custom pagination controls, real-time revalidation, and status filtering.
