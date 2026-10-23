import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Globe,
  Zap,
  Clock,
  ArrowUpRight,
  Target,
  Layers,
} from "lucide-react"

export function AnalyticsView() {
  const funnelSteps = [
    { step: "Top-of-Funnel Impressions", count: "148,200", conversion: "100%", dropoff: "0%" },
    { step: "Product Page Visits", count: "48,600", conversion: "32.8%", dropoff: "67.2%" },
    { step: "Added to Cart / Checkout", count: "14,800", conversion: "10.0%", dropoff: "22.8%" },
    { step: "Successful Purchase", count: "4,620", conversion: "3.1%", dropoff: "6.9%" },
  ]

  const topCountries = [
    { country: "United States", visitors: "64,200", share: "48%" },
    { country: "Germany & EU", visitors: "28,400", share: "21%" },
    { country: "United Kingdom", visitors: "18,900", share: "14%" },
    { country: "India & APAC", visitors: "14,200", share: "11%" },
    { country: "Others", visitors: "8,100", share: "6%" },
  ]

  return (
    <div className="space-y-6">
      {/* Funnel & Conversion Efficiency */}
      <Card className="border shadow-sm">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Target className="h-4 w-4" />
              </div>
              <div>
                <CardTitle className="text-base sm:text-lg font-bold">
                  Sales Conversion Funnel
                </CardTitle>
                <CardDescription className="text-xs">
                  Full lifecycle dropoff rate from first impression to verified payment
                </CardDescription>
              </div>
            </div>
            <Badge variant="success" className="gap-1 text-xs">
              <ArrowUpRight className="h-3 w-3" />
              <span>+3.2% vs baseline</span>
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {funnelSteps.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl border bg-muted/30 space-y-2 relative overflow-hidden"
              >
                <div className="text-xs font-semibold text-muted-foreground flex items-center justify-between">
                  <span>Step 0{idx + 1}</span>
                  <span className="text-foreground font-bold">{item.conversion}</span>
                </div>
                <div className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
                  {item.count}
                </div>
                <div className="text-xs font-medium text-foreground truncate">
                  {item.step}
                </div>
                <div className="w-full bg-muted h-1.5 rounded-full overflow-hidden mt-2">
                  <div
                    className="bg-primary h-full rounded-full transition-all"
                    style={{ width: item.conversion }}
                  />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Regional Traffic & Infrastructure Latency */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border shadow-sm">
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 text-blue-500">
                <Globe className="h-4 w-4" />
              </div>
              <div>
                <CardTitle className="text-base font-bold">Top Traffic Territories</CardTitle>
                <CardDescription className="text-xs">
                  Geographic user distribution across primary server zones
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            {topCountries.map((item) => (
              <div
                key={item.country}
                className="flex items-center justify-between text-xs p-2 rounded-lg hover:bg-muted/40 transition-colors"
              >
                <span className="font-medium text-foreground">{item.country}</span>
                <div className="flex items-center gap-3">
                  <span className="text-muted-foreground">{item.visitors} visits</span>
                  <Badge variant="secondary" className="text-[10px] w-12 text-center justify-center">
                    {item.share}
                  </Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="border shadow-sm">
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/10 text-amber-500">
                <Clock className="h-4 w-4" />
              </div>
              <div>
                <CardTitle className="text-base font-bold">Core Web Vitals & Latency</CardTitle>
                <CardDescription className="text-xs">
                  Global edge CDN response speeds and rendering latency
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">Time to First Byte (TTFB)</span>
                <span className="font-semibold text-emerald-500">42ms (Optimal)</span>
              </div>
              <div className="w-full bg-muted h-1.5 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-full w-[90%]" />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">First Contentful Paint (FCP)</span>
                <span className="font-semibold text-emerald-500">0.8s (Optimal)</span>
              </div>
              <div className="w-full bg-muted h-1.5 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-full w-[85%]" />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">Cumulative Layout Shift (CLS)</span>
                <span className="font-semibold text-emerald-500">0.01 (Zero Shift)</span>
              </div>
              <div className="w-full bg-muted h-1.5 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-full w-[98%]" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
