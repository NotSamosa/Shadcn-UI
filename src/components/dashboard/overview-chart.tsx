import React, { useState } from "react"
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, BarChart3 } from "lucide-react"

const monthlyData = [
  { month: "Jan", revenue: 4500, expenses: 2400 },
  { month: "Feb", revenue: 5200, expenses: 2800 },
  { month: "Mar", revenue: 6100, expenses: 3100 },
  { month: "Apr", revenue: 5800, expenses: 2900 },
  { month: "May", revenue: 7400, expenses: 3400 },
  { month: "Jun", revenue: 8200, expenses: 3800 },
  { month: "Jul", revenue: 7800, expenses: 3600 },
  { month: "Aug", revenue: 9100, expenses: 4200 },
  { month: "Sep", revenue: 8600, expenses: 3900 },
  { month: "Oct", revenue: 9800, expenses: 4500 },
  { month: "Nov", revenue: 11200, expenses: 5100 },
  { month: "Dec", revenue: 12800, expenses: 5600 },
]

export function OverviewChart() {
  const [activeMetric, setActiveMetric] = useState<"all" | "revenue" | "expenses">("all")

  return (
    <Card className="col-span-1 lg:col-span-2 border shadow-sm flex flex-col justify-between">
      <CardHeader className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <BarChart3 className="h-4 w-4" />
            </div>
            <div>
              <CardTitle className="text-base sm:text-lg font-bold">Revenue & Cash Flow</CardTitle>
              <CardDescription className="text-xs">
                Monthly comparison between gross revenue and operating expenses
              </CardDescription>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1.5 bg-muted/60 p-1 rounded-lg self-start sm:self-auto">
          <Button
            variant={activeMetric === "all" ? "secondary" : "ghost"}
            size="sm"
            onClick={() => setActiveMetric("all")}
            className="h-7 text-xs px-2.5"
          >
            All
          </Button>
          <Button
            variant={activeMetric === "revenue" ? "secondary" : "ghost"}
            size="sm"
            onClick={() => setActiveMetric("revenue")}
            className="h-7 text-xs px-2.5"
          >
            Revenue
          </Button>
          <Button
            variant={activeMetric === "expenses" ? "secondary" : "ghost"}
            size="sm"
            onClick={() => setActiveMetric("expenses")}
            className="h-7 text-xs px-2.5"
          >
            Expenses
          </Button>
        </div>
      </CardHeader>

      <CardContent className="pb-4">
        <div className="h-[280px] sm:h-[320px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={monthlyData}
              margin={{ top: 10, right: 10, left: -10, bottom: 0 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="hsl(var(--border))"
                opacity={0.6}
              />
              <XAxis
                dataKey="month"
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `$${value / 1000}k`}
              />
              <Tooltip
                content={({ active, payload, label }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="rounded-lg border bg-popover/95 p-3 text-popover-foreground shadow-lg backdrop-blur-sm text-xs space-y-1.5">
                        <p className="font-bold text-foreground">{label} 2026</p>
                        {payload.map((entry, index) => (
                          <div key={index} className="flex items-center justify-between gap-4">
                            <span className="flex items-center gap-1.5 text-muted-foreground capitalize">
                              <span
                                className="h-2 w-2 rounded-full"
                                style={{ backgroundColor: entry.color }}
                              />
                              {entry.name}:
                            </span>
                            <span className="font-semibold text-foreground">
                              ${(entry.value as number).toLocaleString()}
                            </span>
                          </div>
                        ))}
                      </div>
                    )
                  }
                  return null
                }}
              />
              <Legend
                verticalAlign="top"
                align="right"
                iconType="circle"
                wrapperStyle={{ paddingBottom: 15, fontSize: "12px" }}
              />
              {(activeMetric === "all" || activeMetric === "revenue") && (
                <Bar
                  dataKey="revenue"
                  name="Revenue"
                  fill="hsl(var(--primary))"
                  radius={[4, 4, 0, 0]}
                  maxBarSize={32}
                />
              )}
              {(activeMetric === "all" || activeMetric === "expenses") && (
                <Bar
                  dataKey="expenses"
                  name="Expenses"
                  fill="hsl(var(--muted-foreground) / 0.35)"
                  radius={[4, 4, 0, 0]}
                  maxBarSize={32}
                />
              )}
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="flex items-center justify-between pt-4 border-t text-xs text-muted-foreground">
          <div className="flex items-center gap-1.5 font-medium text-emerald-600 dark:text-emerald-400">
            <TrendingUp className="h-3.5 w-3.5" />
            <span>+18.4% growth compared to Q4 last year</span>
          </div>
          <span className="hidden sm:inline">FY 2026 Projections</span>
        </div>
      </CardContent>
    </Card>
  )
}
