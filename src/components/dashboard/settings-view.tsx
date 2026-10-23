import React, { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Settings, Shield, BellRing, Key, Save, Check } from "lucide-react"
import { toast } from "sonner"

export function SettingsView() {
  const [apiKeyVisible, setApiKeyVisible] = useState(false)
  const [emailAlerts, setEmailAlerts] = useState(true)
  const [weeklyDigest, setWeeklyDigest] = useState(true)

  const handleSave = () => {
    toast.success("Preferences saved", {
      description: "Dashboard configuration and security tokens updated.",
    })
  }

  return (
    <div className="space-y-6 max-w-4xl">
      {/* General Settings */}
      <Card className="border shadow-sm">
        <CardHeader>
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Settings className="h-4 w-4" />
            </div>
            <div>
              <CardTitle className="text-base sm:text-lg font-bold">
                Account & Organization Settings
              </CardTitle>
              <CardDescription className="text-xs">
                Manage your workspace identity, primary domain, and team preferences
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-foreground">Organization Name</label>
              <Input defaultValue="Acme Global Corporation" className="text-xs h-9" />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-foreground">Workspace URL</label>
              <Input defaultValue="https://app.nexusops.io/acme" className="text-xs h-9" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-foreground">Admin Contact Email</label>
              <Input defaultValue="admin@acme-corp.com" className="text-xs h-9" />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-foreground">Billing Currency</label>
              <Input defaultValue="USD ($)" disabled className="text-xs h-9 opacity-80" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Security & API Keys */}
      <Card className="border shadow-sm">
        <CardHeader>
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500">
              <Key className="h-4 w-4" />
            </div>
            <div>
              <CardTitle className="text-base sm:text-lg font-bold">API Access Tokens</CardTitle>
              <CardDescription className="text-xs">
                Manage secret keys for programmatic webhook integrations and telemetry streaming
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-foreground">Production API Key</span>
              <button
                onClick={() => setApiKeyVisible(!apiKeyVisible)}
                className="text-primary hover:underline text-xs"
              >
                {apiKeyVisible ? "Hide Key" : "Show Key"}
              </button>
            </div>
            <Input
              type={apiKeyVisible ? "text" : "password"}
              readOnly
              value="nx_live_99f2c81a293b740e118c7d54902"
              className="font-mono text-xs h-9 bg-muted/40"
            />
          </div>

          <div className="flex items-center justify-between pt-2">
            <span className="text-xs text-muted-foreground">
              Last rotated: <strong>14 days ago</strong> by Sarah Connor
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => toast.success("New API key generated and copied")}
              className="h-8 text-xs"
            >
              Rotate Key
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Save Button */}
      <div className="flex justify-end gap-3 pt-2">
        <Button variant="outline" size="sm" className="h-9 text-xs">
          Cancel
        </Button>
        <Button size="sm" onClick={handleSave} className="h-9 text-xs gap-1.5 shadow-sm">
          <Save className="h-3.5 w-3.5" />
          <span>Save Changes</span>
        </Button>
      </div>
    </div>
  )
}
