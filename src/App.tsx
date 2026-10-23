import React, { useState } from "react"
import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { MetricsGrid } from "@/components/dashboard/metrics-grid"
import { ChartsSection } from "@/components/dashboard/charts-section"
import { RecentTransactionsTable } from "@/components/dashboard/recent-transactions-table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Calendar,
  Download,
  Sparkles,
  TrendingUp,
  BarChart2,
  Table as TableIcon,
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

      {/* Interactive Data Table (Phase 5) */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-semibold tracking-tight text-foreground flex items-center gap-2">
            <TableIcon className="h-4 w-4 text-primary" />
            Live Data Table & Records
          </h2>
          <span className="text-xs text-muted-foreground">Searchable & Paginated</span>
        </div>
        <RecentTransactionsTable />
      </section>

      {/* Phase 5 Completion Status */}
      <Card className="border shadow-sm">
        <CardHeader>
          <div className="flex items-center gap-2 text-primary font-medium text-sm">
            <Sparkles className="h-4 w-4" />
            <span>Phase 5 Completed</span>
          </div>
          <CardTitle className="text-xl sm:text-2xl font-bold">
            Interactive Data Table Deployed
          </CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            Styled with Shadcn Table primitives featuring multi-column sorting (amount, date, customer),
            search filter by customer or invoice, status tabs, user avatars, and pagination.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
            <div className="flex items-center gap-2 p-3 rounded-lg border bg-muted/30">
              <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
              <span>Full search & status filter pill toggles</span>
            </div>
            <div className="flex items-center gap-2 p-3 rounded-lg border bg-muted/30">
              <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
              <span>Interactive column sorting with direction arrows</span>
            </div>
            <div className="flex items-center gap-2 p-3 rounded-lg border bg-muted/30">
              <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
              <span>Responsive pagination controls (Previous / Next)</span>
            </div>
          </div>

          <div className="pt-2 flex items-center justify-between">
            <p className="text-xs text-muted-foreground">
              Up Next: <strong>Phase 6 — Navigation Tabs, Views & Action Feedback</strong> (Overview, Analytics, Reports, Notifications with Sonner toast feedback)
            </p>
          </div>
        </CardContent>
      </Card>
    </DashboardLayout>
  )
}
