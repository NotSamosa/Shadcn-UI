import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, Download, CheckCircle, Clock } from "lucide-react"
import { toast } from "sonner"

export function ReportsView() {
  const reports = [
    {
      id: "rep-1",
      title: "Q4 2025 Consolidated Revenue & Tax Audit",
      format: "PDF",
      size: "4.8 MB",
      date: "Jan 15, 2026",
      status: "Ready",
    },
    {
      id: "rep-2",
      title: "January 2026 Monthly Subscription & Churn Metrics",
      format: "CSV",
      size: "1.2 MB",
      date: "Feb 01, 2026",
      status: "Ready",
    },
    {
      id: "rep-3",
      title: "Customer Acquisition Cohort & Lifetime Value (LTV)",
      format: "XLSX",
      size: "8.4 MB",
      date: "Feb 10, 2026",
      status: "Ready",
    },
    {
      id: "rep-4",
      title: "SOC2 Compliance & Infrastructure Access Audit Log",
      format: "PDF",
      size: "12.1 MB",
      date: "Feb 18, 2026",
      status: "Ready",
    },
  ]

  const handleDownload = (title: string, format: string) => {
    toast.promise(
      new Promise((resolve) => setTimeout(resolve, 800)),
      {
        loading: `Generating ${format} export for ${title}...`,
        success: `${title} (${format}) downloaded successfully.`,
        error: "Export failed. Please try again.",
      }
    )
  }

  return (
    <div className="space-y-6">
      <Card className="border shadow-sm">
        <CardHeader className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <FileText className="h-4 w-4" />
              </div>
              <div>
                <CardTitle className="text-base sm:text-lg font-bold">
                  Generated Financial & Operational Reports
                </CardTitle>
                <CardDescription className="text-xs">
                  Automated monthly and quarterly statement exports for auditing and executive review
                </CardDescription>
              </div>
            </div>
          </div>
          <Button
            size="sm"
            onClick={() => handleDownload("Batch All Reports", "ZIP")}
            className="h-8 text-xs gap-1.5 shadow-sm"
          >
            <Download className="h-3.5 w-3.5" />
            <span>Export All (ZIP)</span>
          </Button>
        </CardHeader>
        <CardContent>
          <div className="divide-y rounded-lg border">
            {reports.map((report) => (
              <div
                key={report.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-4 gap-3 hover:bg-muted/30 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className="h-9 w-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground font-mono font-bold text-xs shrink-0 mt-0.5">
                    {report.format}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground leading-snug">
                      {report.title}
                    </h4>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Generated on {report.date} • {report.size}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 self-end sm:self-auto">
                  <Badge variant="outline" className="text-emerald-600 bg-emerald-500/10 border-emerald-500/20 text-xs">
                    {report.status}
                  </Badge>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDownload(report.title, report.format)}
                    className="h-8 text-xs gap-1.5"
                  >
                    <Download className="h-3.5 w-3.5" />
                    <span>Download</span>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
