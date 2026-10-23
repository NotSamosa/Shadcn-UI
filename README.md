# Shadcn UI Analytics & Operations Dashboard

A professional, fully responsive enterprise analytics and operations dashboard built with **React 19**, **TypeScript**, **Vite**, **Tailwind CSS**, and **Shadcn UI** components.

---

## 🌟 Key Features

### 1. Fixed & Collapsible Responsive Sidebar
* Fixed desktop sidebar collapsible between full expanded mode (256px) and compact icon mode (80px).
* Smooth transition animation with collapse/expand toggles.
* Mobile responsive slide-in **Sheet** drawer for screens `< 1024px`.
* Active navigation routing supporting *Overview*, *Analytics*, *Customers*, *Orders & Sales*, *Reports*, *Notifications*, and *Settings*.
* Live user profile badge with avatar and online status indicator.

### 2. Top Navigation Bar
* Dynamic breadcrumbs indicator reflecting active dashboard view.
* Global search input with `⌘K` keyboard shortcut styling.
* Real-time notifications bell with unread ping animation and preview menu.
* Light & Dark mode theme toggle with persistent storage and system preference detection.
* User account dropdown menu with profile and logout options.

### 3. Metric Summary KPI Cards
* 4 distinct KPI summary cards:
  * **Total Revenue**: `$45,231.89` (+20.1% growth)
  * **Subscriptions**: `+2,350` (+180.1% monthly trend)
  * **Sales Orders**: `+12,234` (+19.0% vs target)
  * **Active Now**: `+573` concurrent users with a real-time live pulsing badge.

### 4. Harmonized Data Visualizations (Recharts)
* **Revenue & Operating Expenses Bar Chart**: Multi-metric bar chart with custom tooltip cards and series toggles (All, Revenue, Expenses).
* **Traffic & Sales Acquisition Channels Donut/Pie Chart**: Visualizes sales shares (Direct, Enterprise, Affiliates, Organic) with a centered volume indicator.
* **Weekly Activity & Conversion Velocity Area Chart**: Smooth spline area chart with gradient fills tracking 7-day conversions.

### 5. Interactive Data Table
* **Recent Transactions & Orders Ledger**:
  * Rich customer rows with avatars, names, and emails.
  * Status badges (*Completed*, *Processing*, *Pending*, *Refunded*).
  * Instant search filtering across customers, emails, and invoice numbers.
  * Column sorting on Amount, Date, and Customer with interactive direction arrows.
  * Responsive pagination with page range status and Next/Previous navigation.

### 6. Navigation Tabs & Interactive Controls
* Tabbed switcher for **Overview**, **Analytics**, **Reports**, **Notifications**, and a disabled **AI Forecasts (Pro)** tab.
* Interactive **Date-Range Picker** dropdown (*Today, Last 7 Days, Last 30 Days, This Month, Year to Date*).
* Instant toast notification feedback powered by **Sonner** for downloads, reports generation, and data refreshes.

---

## 🛠️ Technology Stack

* **Framework**: React 19, TypeScript
* **Build Tool**: Vite 8
* **Styling**: Tailwind CSS v3 with CSS variables & HSL color tokens
* **UI Primitives**: Radix UI (Slot, Avatar, DropdownMenu, Dialog/Sheet, Tabs)
* **Icons**: Lucide React
* **Charts**: Recharts
* **Notifications**: Sonner
* **Utilities**: `clsx`, `tailwind-merge`, `class-variance-authority`

---

## 🚀 Getting Started

### Prerequisites
* Node.js v18+ (tested on Node v24)
* npm v9+

### Installation & Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```
