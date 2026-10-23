import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, Mail, Phone, ExternalLink } from "lucide-react"

const topClients = [
  {
    name: "Olivia Martin",
    company: "Stripe Integrations Ltd",
    email: "olivia.martin@email.com",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
    initials: "OM",
    plan: "Enterprise",
    spend: "$24,500",
    status: "Active",
  },
  {
    name: "Jackson Lee",
    company: "Apex Media Agency",
    email: "jackson.lee@email.com",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
    initials: "JL",
    plan: "Scale",
    spend: "$12,400",
    status: "Active",
  },
  {
    name: "Isabella Nguyen",
    company: "Hyperion Cloud Systems",
    email: "isabella.nguyen@email.com",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
    initials: "IN",
    plan: "Enterprise",
    spend: "$38,900",
    status: "Active",
  },
  {
    name: "William Kim",
    company: "FinTech Ventures Inc",
    email: "will@corp.dev",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
    initials: "WK",
    plan: "Startup Pro",
    spend: "$6,200",
    status: "Trial",
  },
]

export function CustomersView() {
  return (
    <div className="space-y-6">
      <Card className="border shadow-sm">
        <CardHeader>
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 text-blue-500">
              <Users className="h-4 w-4" />
            </div>
            <div>
              <CardTitle className="text-base sm:text-lg font-bold">
                Customer Accounts & Client Directory
              </CardTitle>
              <CardDescription className="text-xs">
                Key client profiles, tier status, lifetime valuation, and relationship leads
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {topClients.map((client) => (
              <div
                key={client.email}
                className="p-4 rounded-xl border bg-card hover:bg-muted/30 transition-all flex items-start justify-between gap-3 shadow-xs"
              >
                <div className="flex items-start gap-3">
                  <Avatar className="h-10 w-10 ring-1 ring-border">
                    <AvatarImage src={client.avatar} alt={client.name} />
                    <AvatarFallback>{client.initials}</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-semibold text-foreground">
                        {client.name}
                      </h4>
                      <Badge variant="outline" className="text-[10px] py-0 px-1.5 font-medium">
                        {client.plan}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">{client.company}</p>
                    <p className="text-[11px] text-muted-foreground flex items-center gap-1">
                      <Mail className="h-3 w-3" />
                      <span>{client.email}</span>
                    </p>
                  </div>
                </div>

                <div className="text-right space-y-1">
                  <span className="text-sm font-extrabold text-foreground block">
                    {client.spend}
                  </span>
                  <Badge variant="success" className="text-[10px] py-0 px-1.5">
                    {client.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
