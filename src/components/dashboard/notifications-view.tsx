import React, { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Bell, CheckCheck, ShieldAlert, Zap, Server, Trash2 } from "lucide-react"
import { toast } from "sonner"

interface NotificationItem {
  id: string
  title: string
  message: string
  timestamp: string
  type: "warning" | "success" | "info"
  unread: boolean
}

const initialNotifications: NotificationItem[] = [
  {
    id: "notif-1",
    title: "New Enterprise Contract Signed",
    message: "Globex Corporation finalized the 3-year Enterprise SLA ($120,000/yr).",
    timestamp: "10 minutes ago",
    type: "success",
    unread: true,
  },
  {
    id: "notif-2",
    title: "High API Request Rate Detected",
    message: "Cluster EU-Central experienced a 340% traffic burst. Auto-scaling spawned 4 new pods.",
    timestamp: "45 minutes ago",
    type: "warning",
    unread: true,
  },
  {
    id: "notif-3",
    title: "Monthly Automated Backup Complete",
    message: "All PostgreSQL snapshot volumes encrypted and replicated to secondary cold storage.",
    timestamp: "3 hours ago",
    type: "info",
    unread: false,
  },
  {
    id: "notif-4",
    title: "Stripe Webhook Handshake Re-verified",
    message: "Webhook endpoint signed and validated with TLS 1.3 cert renewal.",
    timestamp: "Yesterday at 18:40",
    type: "info",
    unread: false,
  },
]

export function NotificationsView() {
  const [notifications, setNotifications] = useState(initialNotifications)

  const markAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, unread: false })))
    toast.success("All notifications marked as read")
  }

  const dismissNotif = (id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id))
    toast.info("Notification dismissed")
  }

  const getIcon = (type: NotificationItem["type"]) => {
    switch (type) {
      case "warning":
        return <ShieldAlert className="h-4 w-4 text-amber-500" />
      case "success":
        return <Zap className="h-4 w-4 text-emerald-500" />
      case "info":
        return <Server className="h-4 w-4 text-primary" />
    }
  }

  return (
    <div className="space-y-6">
      <Card className="border shadow-sm">
        <CardHeader className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Bell className="h-4 w-4" />
            </div>
            <div>
              <CardTitle className="text-base sm:text-lg font-bold">
                System Alerts & Activity Logs
              </CardTitle>
              <CardDescription className="text-xs">
                Real-time security events, automated billing updates, and operational notifications
              </CardDescription>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={markAllRead}
              className="h-8 text-xs gap-1.5"
            >
              <CheckCheck className="h-3.5 w-3.5" />
              <span>Mark all as read</span>
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {notifications.length > 0 ? (
              notifications.map((n) => (
                <div
                  key={n.id}
                  className={`flex items-start justify-between p-4 rounded-lg border transition-all ${
                    n.unread
                      ? "bg-primary/5 border-primary/20 shadow-xs"
                      : "bg-card hover:bg-muted/30"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5">{getIcon(n.type)}</div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm font-semibold text-foreground">
                          {n.title}
                        </h4>
                        {n.unread && (
                          <Badge variant="default" className="text-[10px] py-0 px-1.5 h-4">
                            New
                          </Badge>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        {n.message}
                      </p>
                      <span className="text-[10px] text-muted-foreground font-mono mt-2 block">
                        {n.timestamp}
                      </span>
                    </div>
                  </div>

                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => dismissNotif(n.id)}
                    className="h-7 w-7 text-muted-foreground hover:text-foreground shrink-0"
                    title="Dismiss notification"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </Button>
                </div>
              ))
            ) : (
              <div className="py-12 text-center text-sm text-muted-foreground">
                No active notifications. You're completely caught up!
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
