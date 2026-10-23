import React from "react"
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Activity, ArrowUpRight } from "lucide-react"

const weeklyActivityData = [
  { day: "Mon", sessions: 2400, conversions: 420 },
  { day: "Tue", sessions: 3200, conversions: 580 },
  { day: "Wed", sessions: 2900, conversions: 510 },
  { day: "Thu", sessions: 4100, conversions: 790 },
  { day: "Fri", sessions: 4800, conversions: 920 },
  { day: "Sat", sessions: 3900, conversions: 680 },
  { day: "Sun", sessions: 4400, conversions: 840 },
]

export function ActivityLineChart() {
  return (
    <Card className="col-span-1 lg:col-span-3 border shadow-sm">
      <CardHeader className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 gap-2">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500">
            <Activity className="h-4 w-4" />
          </div>
          <div>
            <CardTitle className="text-base sm:text-lg font-bold">
              User Activity & Conversion Velocity
            </CardTitle>
            <CardDescription className="text-xs">
              Daily concurrent sessions and goal completions over the past 7 days
            </CardDescription>
          </div>
        </div>

        <Badge variant="success" className="gap-1 py-1 px-2.5 self-start sm:self-auto text-xs">
          <ArrowUpRight className="h-3.5 w-3.5" />
          <span>+24.6% Conversion Rate</span>
        </Badge>
      </CardHeader>

      <CardContent>
        <div className="h-[240px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={weeklyActivityData}
              margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
            >
              <defs>
                <linearGradient id="sessionGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.35} />
                  <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0.0} />
                </linearGradient>
                <linearGradient id="conversionGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.35} />
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0.0} />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="hsl(var(--border))"
                opacity={0.6}
              />
              <XAxis
                dataKey="day"
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
              />
              <Tooltip
                content={({ active, payload, label }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="rounded-lg border bg-popover/95 p-3 text-popover-foreground shadow-lg backdrop-blur-sm text-xs space-y-1">
                        <p className="font-bold">{label} Summary</p>
                        <p className="text-primary font-medium">
                          Sessions: {(payload[0]?.value as number).toLocaleString()}
                        </p>
                        <p className="text-emerald-500 font-medium">
                          Conversions: {(payload[1]?.value as number).toLocaleString()}
                        </p>
                      </div>
                    )
                  }
                  return null
                }}
              />
              <Area
                type="monotone"
                dataKey="sessions"
                stroke="hsl(var(--primary))"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#sessionGradient)"
              />
              <Area
                type="monotone"
                dataKey="conversions"
                stroke="#10b981"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#conversionGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
