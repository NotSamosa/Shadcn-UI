import React from "react"
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PieChart as PieChartIcon } from "lucide-react"

const categoryData = [
  { name: "Direct Sales", value: 4500, color: "hsl(var(--primary))", share: "45%" },
  { name: "Enterprise Partners", value: 2800, color: "hsl(217 91% 60% / 0.8)", share: "28%" },
  { name: "Affiliate Referral", value: 1600, color: "hsl(142 76% 45%)", share: "16%" },
  { name: "Organic Search", value: 1100, color: "hsl(38 92% 50%)", share: "11%" },
]

export function SalesCategoryChart() {
  const total = categoryData.reduce((acc, curr) => acc + curr.value, 0)

  return (
    <Card className="col-span-1 border shadow-sm flex flex-col justify-between">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <PieChartIcon className="h-4 w-4" />
          </div>
          <div>
            <CardTitle className="text-base sm:text-lg font-bold">Acquisition Channels</CardTitle>
            <CardDescription className="text-xs">
              Traffic & revenue source breakdown
            </CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Donut Chart with Centered Total */}
        <div className="relative h-[200px] w-full flex items-center justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    const data = payload[0]
                    return (
                      <div className="rounded-lg border bg-popover/95 p-2.5 text-popover-foreground shadow-md backdrop-blur-sm text-xs">
                        <p className="font-semibold">{data.name}</p>
                        <p className="text-muted-foreground">
                          ${(data.value as number).toLocaleString()} ({categoryData.find(c => c.name === data.name)?.share})
                        </p>
                      </div>
                    )
                  }
                  return null
                }}
              />
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={85}
                paddingAngle={4}
                dataKey="value"
                stroke="hsl(var(--card))"
                strokeWidth={2}
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="text-2xl font-extrabold tracking-tight">
              ${(total / 1000).toFixed(1)}k
            </span>
            <span className="text-[11px] text-muted-foreground uppercase tracking-wider font-medium">
              Total Volume
            </span>
          </div>
        </div>

        {/* Custom Segment Legend */}
        <div className="space-y-2 pt-2 border-t">
          {categoryData.map((item) => (
            <div
              key={item.name}
              className="flex items-center justify-between text-xs hover:bg-muted/40 p-1 rounded-md transition-colors"
            >
              <div className="flex items-center gap-2 truncate">
                <span
                  className="h-2.5 w-2.5 rounded-full shrink-0"
                  style={{ backgroundColor: item.color }}
                />
                <span className="font-medium text-foreground truncate">{item.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground">${(item.value).toLocaleString()}</span>
                <span className="font-semibold text-foreground w-8 text-right">{item.share}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
