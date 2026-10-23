import React, { useState } from "react"
import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  CheckCircle2,
  Layers,
  ArrowRight,
  Sidebar as SidebarIcon,
  Search,
  Bell,
  Smartphone,
  Sliders,
  Sparkles,
} from "lucide-react"

export default function App() {
  const [currentView, setCurrentView] = useState("overview")
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <DashboardLayout
      currentView={currentView}
      onSelectView={setCurrentView}
      searchQuery={searchQuery}
      onSearchChange={setSearchQuery}
    >
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-6">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Dashboard Overview
            </h1>
            <Badge variant="success" className="gap-1.5 py-0.5">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Live Workspace
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground mt-1">
            Real-time operations, analytical insights, and system performance metrics.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Badge variant="outline" className="text-xs px-2.5 py-1">
            Active View: <strong className="ml-1 text-foreground capitalize">{currentView}</strong>
          </Badge>
          {searchQuery && (
            <Badge variant="secondary" className="text-xs">
              Filtering: "{searchQuery}"
            </Badge>
          )}
        </div>
      </div>

      {/* Shell Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="hover:border-primary/50 transition-colors">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Collapsible Sidebar</CardTitle>
            <SidebarIcon className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Fixed & Reactive</div>
            <p className="text-xs text-muted-foreground mt-1">
              Collapses smoothly to 80px on desktop with tooltips and badge indicators.
            </p>
          </CardContent>
        </Card>

        <Card className="hover:border-primary/50 transition-colors">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Mobile Drawer Navigation</CardTitle>
            <Smartphone className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Sheet Slide-in</div>
            <p className="text-xs text-muted-foreground mt-1">
              Full slide-out drawer on tablets & mobile screens with backdrop blur.
            </p>
          </CardContent>
        </Card>

        <Card className="hover:border-primary/50 transition-colors">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Top Controls & Menus</CardTitle>
            <Sliders className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Search & Profile</div>
            <p className="text-xs text-muted-foreground mt-1">
              Global search bar, unread notification alerts, theme toggle, and account menu.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Phase 2 Progress Card */}
      <Card className="border shadow-sm">
        <CardHeader>
          <div className="flex items-center gap-2 text-primary font-medium text-sm">
            <Sparkles className="h-4 w-4" />
            <span>Phase 2 Completed</span>
          </div>
          <CardTitle className="text-xl sm:text-2xl font-bold">
            Responsive Shell Layout Implemented
          </CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            The shell architecture provides a fixed sidebar, independent main content scrolling,
            full responsiveness on mobile screens, and synchronized navigation state.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <div className="flex items-center gap-2 p-3 rounded-lg border bg-muted/30">
              <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
              <span>Independent scroll container for main view</span>
            </div>
            <div className="flex items-center gap-2 p-3 rounded-lg border bg-muted/30">
              <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
              <span>Collapsible desktop sidebar + mobile Sheet</span>
            </div>
            <div className="flex items-center gap-2 p-3 rounded-lg border bg-muted/30">
              <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
              <span>User profile card with status indicator</span>
            </div>
            <div className="flex items-center gap-2 p-3 rounded-lg border bg-muted/30">
              <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
              <span>Search bar, notifications dropdown, and theme switcher</span>
            </div>
          </div>

          <div className="pt-2 flex items-center justify-between">
            <p className="text-xs text-muted-foreground">
              Up Next: <strong>Phase 3 — Metric Summary Cards Section</strong> (Total Revenue, Subscriptions, Sales, Active Users)
            </p>
          </div>
        </CardContent>
      </Card>
    </DashboardLayout>
  )
}
