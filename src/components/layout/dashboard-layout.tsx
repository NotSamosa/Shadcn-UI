import React, { useState } from "react"
import { Sidebar } from "./sidebar"
import { Navbar } from "./navbar"

interface DashboardLayoutProps {
  children: React.ReactNode
  currentView: string
  onSelectView: (viewId: string) => void
  searchQuery: string
  onSearchChange: (query: string) => void
}

export function DashboardLayout({
  children,
  currentView,
  onSelectView,
  searchQuery,
  onSearchChange,
}: DashboardLayoutProps) {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-background text-foreground">
      {/* Desktop Fixed Sidebar */}
      <div className="hidden lg:flex h-full shrink-0">
        <Sidebar
          currentView={currentView}
          onSelectView={onSelectView}
          isCollapsed={isCollapsed}
          onToggleCollapse={() => setIsCollapsed(!isCollapsed)}
        />
      </div>

      {/* Main Content Area */}
      <div className="flex flex-1 flex-col h-full overflow-hidden">
        {/* Sticky Top Navbar */}
        <Navbar
          currentView={currentView}
          onSelectView={onSelectView}
          searchQuery={searchQuery}
          onSearchChange={onSearchChange}
        />

        {/* Scrollable Main Canvas */}
        <main className="flex-1 overflow-y-auto px-4 py-6 md:px-8 md:py-8">
          <div className="mx-auto max-w-7xl space-y-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
