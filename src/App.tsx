import React, { useState } from "react"
import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { MetricsGrid } from "@/components/dashboard/metrics-grid"
import { ChartsSection } from "@/components/dashboard/charts-section"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Calendar,
  Download,
  Sparkles,
  TrendingUp,
  BarChart2,
  CheckCircle2,
  RefreshCw,
} from "lucide-react"

export default function App() {
  const [currentView, setCurrentView] = useState("overview")
  const [searchQuery, setSearchQuery] = useState("")
  const [isRefreshing, setIsRefreshing] = useState(false)

  const handleRefresh = () => {
    setIsRefreshing(true)
    setTimeout(() => setIsRefreshing(false), 800)
  }

  return (
    <DashboardLayout
      currentView={currentView}
      onSelectView={setCurrentView}
      searchQuery={searchQuery}
      onSearchChange={setSearchQuery}
    >
      {/* Dashboard Top Header & Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-6">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Dashboard Overview
            </h1>
            <Badge variant="success" className="gap-1.5 py-0.5">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Live Feed
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground mt-1">
            Real-time operations, analytical insights, and system performance metrics.
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handleRefresh}
            className="h-9 gap-1.5 text-xs"
            disabled={isRefreshing}
          >
            <RefreshCw
              className={`h-3.5 w-3.5 ${isRefreshing ? "animate-spin text-primary" : ""}`}
            />
            <span>Refresh</span>
          </Button>

          <Button variant="outline" size="sm" className="h-9 gap-1.5 text-xs hidden sm:flex">
            <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
            <span>Jan 20 – Feb 20, 2026</span>
          </Button>

          <Button size="sm" className="h-9 gap-1.5 text-xs shadow-sm shadow-primary/20">
            <Download className="h-3.5 w-3.5" />
            <span>Download</span>
          </Button>
        </div>
      </div>

      {/* 4 Metric Summary Cards (Phase 3) */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-semibold tracking-tight text-foreground flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-primary" />
            Key Performance Metrics
          </h2>
          <span className="text-xs text-muted-foreground">Updated 2 minutes ago</span>
        </div>
        <MetricsGrid />
      </section>

      {/* Charts & Visualizations (Phase 4) */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-semibold tracking-tight text-foreground flex items-center gap-2">
            <BarChart2 className="h-4 w-4 text-primary" />
            Financial & Operational Trends
          </h2>
          <span className="text-xs text-muted-foreground">Interactive analytics</span>
        </div>
        <ChartsSection />
      </section>

      {/* Phase 4 Completion Status */}
      <Card className="border shadow-sm">
        <CardHeader>
          <div className="flex items-center gap-2 text-primary font-medium text-sm">
            <Sparkles className="h-4 w-4" />
            <span>Phase 4 Completed</span>
          </div>
          <CardTitle className="text-xl sm:text-2xl font-bold">
            Data Visualizations & Charts Deployed
          </CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            Added Bar, Donut/Pie, and Spline Area charts styled harmoniously with Shadcn theme tokens,
            custom tooltips, interactive filters, and responsive viewports.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
            <div className="flex items-center gap-2 p-3 rounded-lg border bg-muted/30">
              <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
              <span>Revenue Bar Chart with metric toggles & tooltips</span>
            </div>
            <div className="flex items-center gap-2 p-3 rounded-lg border bg-muted/30">
              <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
              <span>Channel Acquisition Donut Chart with live legend</span>
            </div>
            <div className="flex items-center gap-2 p-3 rounded-lg border bg-muted/30">
              <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
              <span>Session & Conversion Spline Line/Area Chart</span>
            </div>
          </div>

          <div className="pt-2 flex items-center justify-between">
            <p className="text-xs text-muted-foreground">
              Up Next: <strong>Phase 5 — Interactive Data Table</strong> (Recent Transactions & Users with sorting, filtering, and pagination)
            </p>
          </div>
        </CardContent>
      </Card>
    </DashboardLayout>
  )
}
