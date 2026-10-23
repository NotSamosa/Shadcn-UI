import React from "react"
import { DollarSign, Users, CreditCard, Activity } from "lucide-react"
import { MetricCard } from "./metric-card"

export function MetricsGrid() {
  const metrics = [
    {
      title: "Total Revenue",
      value: "$45,231.89",
      change: "+20.1%",
      isPositive: true,
      description: "from last month",
      icon: DollarSign,
      iconColor: "text-emerald-500",
      iconBg: "bg-emerald-500/10",
    },
    {
      title: "Subscriptions",
      value: "+2,350",
      change: "+180.1%",
      isPositive: true,
      description: "from last month",
      icon: Users,
      iconColor: "text-blue-500",
      iconBg: "bg-blue-500/10",
    },
    {
      title: "Sales Orders",
      value: "+12,234",
      change: "+19.0%",
      isPositive: true,
      description: "from last month",
      icon: CreditCard,
      iconColor: "text-indigo-500",
      iconBg: "bg-indigo-500/10",
    },
    {
      title: "Active Now",
      value: "+573",
      change: "+201",
      isPositive: true,
      description: "since last hour",
      icon: Activity,
      iconColor: "text-amber-500",
      iconBg: "bg-amber-500/10",
      isLive: true,
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {metrics.map((metric, index) => (
        <MetricCard key={index} {...metric} />
      ))}
    </div>
  )
}
