import React, { useState } from "react"
import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { MetricsGrid } from "@/components/dashboard/metrics-grid"
import { ChartsSection } from "@/components/dashboard/charts-section"
import { RecentTransactionsTable } from "@/components/dashboard/recent-transactions-table"
import { AnalyticsView } from "@/components/dashboard/analytics-view"
import { ReportsView } from "@/components/dashboard/reports-view"
import { NotificationsView } from "@/components/dashboard/notifications-view"
import { CustomersView } from "@/components/dashboard/customers-view"
import { SettingsView } from "@/components/dashboard/settings-view"
import { DateRangePicker } from "@/components/dashboard/date-range-picker"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Toaster } from "@/components/ui/sonner"
import { toast } from "sonner"
import {
  Download,
  TrendingUp,
  BarChart2,
  Table as TableIcon,
  RefreshCw,
  LayoutDashboard,
  BarChart3,
  FileText,
  Bell,
  Lock,
  ShieldCheck,
  Heart,
} from "lucide-react"

export default function App() {
  const [currentView, setCurrentView] = useState("overview")
  const [searchQuery, setSearchQuery] = useState("")
  const [isRefreshing, setIsRefreshing] = useState(false)

  const handleTabChange = (value: string) => {
    setCurrentView(value)
  }

  const handleRefresh = () => {
    setIsRefreshing(true)
    toast.promise(
      new Promise((resolve) => setTimeout(resolve, 800)),
      {
        loading: "Synchronizing dashboard with cloud telemetry...",
        success: "All metrics & transactions refreshed successfully.",
        error: "Failed to sync metrics.",
        finally: () => setIsRefreshing(false),
      }
    )
  }

  const handleDownloadReport = () => {
    toast.promise(
      new Promise((resolve) => setTimeout(resolve, 1000)),
      {
        loading: "Compiling executive summary report...",
        success: "Dashboard_Report_Q1_2026.pdf exported successfully.",
        error: "Export error.",
      }
    )
  }

  // Active tab selection
  const tabValue = ["overview", "analytics", "reports", "notifications"].includes(currentView)
    ? currentView
    : "overview"

  return (
    <DashboardLayout
      currentView={currentView}
      onSelectView={setCurrentView}
      searchQuery={searchQuery}
      onSearchChange={setSearchQuery}
    >
      <Toaster position="top-right" richColors />

      {/* Top Header & Action Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-6">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              {currentView === "settings"
                ? "Workspace Settings"
                : currentView === "customers"
                ? "Client Directory"
                : currentView === "sales"
                ? "Sales & Fulfillment Ledger"
                : "Operations & Analytics"}
            </h1>
            <Badge variant="success" className="gap-1.5 py-0.5">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Live Workspace
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground mt-1">
            Real-time multi-channel metrics, customer transactions, and automated intelligence.
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center gap-2">
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

          {/* Date Range Selector */}
          <DateRangePicker />

          <Button
            size="sm"
            onClick={handleDownloadReport}
            className="h-9 gap-1.5 text-xs shadow-sm shadow-primary/20"
          >
            <Download className="h-3.5 w-3.5" />
            <span>Download</span>
          </Button>
        </div>
      </div>

      {/* View Router */}
      {currentView === "customers" ? (
        <CustomersView />
      ) : currentView === "settings" ? (
        <SettingsView />
      ) : currentView === "sales" ? (
        <div className="space-y-6">
          <MetricsGrid />
          <RecentTransactionsTable />
        </div>
      ) : (
        /* Tabs View (Overview, Analytics, Reports, Notifications) */
        <Tabs value={tabValue} onValueChange={handleTabChange} className="space-y-6">
          <div className="flex items-center justify-between overflow-x-auto pb-1">
            <TabsList className="h-10 p-1 bg-muted/60 border">
              <TabsTrigger value="overview" className="gap-2 px-3 sm:px-4 text-xs sm:text-sm">
                <LayoutDashboard className="h-4 w-4" />
                <span>Overview</span>
              </TabsTrigger>
              <TabsTrigger value="analytics" className="gap-2 px-3 sm:px-4 text-xs sm:text-sm">
                <BarChart3 className="h-4 w-4" />
                <span>Analytics</span>
              </TabsTrigger>
              <TabsTrigger value="reports" className="gap-2 px-3 sm:px-4 text-xs sm:text-sm">
                <FileText className="h-4 w-4" />
                <span>Reports</span>
              </TabsTrigger>
              <TabsTrigger value="notifications" className="gap-2 px-3 sm:px-4 text-xs sm:text-sm">
                <Bell className="h-4 w-4" />
                <span>Notifications</span>
              </TabsTrigger>
              <TabsTrigger
                value="integrations"
                disabled
                className="gap-1.5 px-3 text-xs sm:text-sm opacity-50 cursor-not-allowed"
              >
                <Lock className="h-3 w-3" />
                <span>AI Forecasts (Pro)</span>
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Overview Tab Content */}
          <TabsContent value="overview" className="space-y-8 mt-0">
            {/* Metric Summary Cards Section */}
            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-base font-semibold tracking-tight text-foreground flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-primary" />
                  Key Performance Metrics
                </h2>
                <span className="text-xs text-muted-foreground">Updated in real-time</span>
              </div>
              <MetricsGrid />
            </section>

            {/* Charts Visualizations Section */}
            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-base font-semibold tracking-tight text-foreground flex items-center gap-2">
                  <BarChart2 className="h-4 w-4 text-primary" />
                  Financial & Operational Trends
                </h2>
                <span className="text-xs text-muted-foreground">Multi-series comparisons</span>
              </div>
              <ChartsSection />
            </section>

            {/* Interactive Data Table Section */}
            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-base font-semibold tracking-tight text-foreground flex items-center gap-2">
                  <TableIcon className="h-4 w-4 text-primary" />
                  Live Transactions & Ledger
                </h2>
                <span className="text-xs text-muted-foreground">Searchable & Paginated</span>
              </div>
              <RecentTransactionsTable />
            </section>
          </TabsContent>

          {/* Analytics Tab Content */}
          <TabsContent value="analytics" className="mt-0">
            <AnalyticsView />
          </TabsContent>

          {/* Reports Tab Content */}
          <TabsContent value="reports" className="mt-0">
            <ReportsView />
          </TabsContent>

          {/* Notifications Tab Content */}
          <TabsContent value="notifications" className="mt-0">
            <NotificationsView />
          </TabsContent>
        </Tabs>
      )}

      {/* Polished Executive Footer */}
      <footer className="pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-medium text-foreground">NexusOps Platform</span>
          <span>•</span>
          <span>v2.4.1 Production</span>
          <span>•</span>
          <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
            <ShieldCheck className="h-3.5 w-3.5" />
            SOC2 Certified
          </span>
        </div>

        <div className="flex items-center gap-4">
          <a href="#help" onClick={(e) => { e.preventDefault(); toast.info("Documentation portal is active"); }} className="hover:text-foreground transition-colors">
            Documentation
          </a>
          <span>•</span>
          <a href="#api" onClick={(e) => { e.preventDefault(); toast.info("API Reference v2"); }} className="hover:text-foreground transition-colors">
            API Reference
          </a>
          <span>•</span>
          <a href="#status" onClick={(e) => { e.preventDefault(); toast.success("All systems operating normally (99.99%)"); }} className="hover:text-foreground transition-colors">
            System Status
          </a>
        </div>
      </footer>
    </DashboardLayout>
  )
}
