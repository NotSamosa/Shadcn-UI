import React, { useState, useMemo } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  ArrowUpDown,
  ArrowUp,
  ArrowDown,
  Search,
  Filter,
  ChevronLeft,
  ChevronRight,
  Receipt,
  Download,
  CreditCard,
  FileCheck,
} from "lucide-react"

export interface Transaction {
  id: string
  invoice: string
  customer: {
    name: string
    email: string
    avatar: string
    initials: string
  }
  status: "completed" | "processing" | "pending" | "refunded"
  method: string
  date: string
  amount: number
}

const mockTransactions: Transaction[] = [
  {
    id: "tx-1",
    invoice: "INV-8041",
    customer: {
      name: "Olivia Martin",
      email: "olivia.martin@email.com",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
      initials: "OM",
    },
    status: "completed",
    method: "Mastercard •••• 4242",
    date: "2026-02-18",
    amount: 1999.0,
  },
  {
    id: "tx-2",
    invoice: "INV-8040",
    customer: {
      name: "Jackson Lee",
      email: "jackson.lee@email.com",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
      initials: "JL",
    },
    status: "completed",
    method: "Visa •••• 5521",
    date: "2026-02-18",
    amount: 39.0,
  },
  {
    id: "tx-3",
    invoice: "INV-8039",
    customer: {
      name: "Isabella Nguyen",
      email: "isabella.nguyen@email.com",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
      initials: "IN",
    },
    status: "processing",
    method: "PayPal Account",
    date: "2026-02-17",
    amount: 299.0,
  },
  {
    id: "tx-4",
    invoice: "INV-8038",
    customer: {
      name: "William Kim",
      email: "will@corp.dev",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
      initials: "WK",
    },
    status: "completed",
    method: "Stripe Transfer",
    date: "2026-02-16",
    amount: 99.0,
  },
  {
    id: "tx-5",
    invoice: "INV-8037",
    customer: {
      name: "Sofia Davis",
      email: "sofia.davis@email.com",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop&q=80",
      initials: "SD",
    },
    status: "pending",
    method: "ACH Direct Debit",
    date: "2026-02-16",
    amount: 349.5,
  },
  {
    id: "tx-6",
    invoice: "INV-8036",
    customer: {
      name: "Marcus Aurelius",
      email: "marcus.a@rome.io",
      avatar: "",
      initials: "MA",
    },
    status: "completed",
    method: "Apple Pay",
    date: "2026-02-15",
    amount: 1450.0,
  },
  {
    id: "tx-7",
    invoice: "INV-8035",
    customer: {
      name: "Elena Rostova",
      email: "elena@stellar.tech",
      avatar: "",
      initials: "ER",
    },
    status: "refunded",
    method: "Visa •••• 9811",
    date: "2026-02-14",
    amount: 520.0,
  },
  {
    id: "tx-8",
    invoice: "INV-8034",
    customer: {
      name: "David Chen",
      email: "david.c@hyper.co",
      avatar: "",
      initials: "DC",
    },
    status: "completed",
    method: "Mastercard •••• 1109",
    date: "2026-02-14",
    amount: 850.0,
  },
  {
    id: "tx-9",
    invoice: "INV-8033",
    customer: {
      name: "Chloe Bennett",
      email: "chloe@shield.org",
      avatar: "",
      initials: "CB",
    },
    status: "processing",
    method: "Stripe Transfer",
    date: "2026-02-13",
    amount: 120.0,
  },
  {
    id: "tx-10",
    invoice: "INV-8032",
    customer: {
      name: "Liam O'Connor",
      email: "liam@dublin.ie",
      avatar: "",
      initials: "LO",
    },
    status: "completed",
    method: "Visa •••• 7731",
    date: "2026-02-12",
    amount: 675.0,
  },
]

type SortField = "customer" | "amount" | "date"
type SortDirection = "asc" | "desc"

export function RecentTransactionsTable() {
  const [filterQuery, setFilterQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [sortField, setSortField] = useState<SortField>("date")
  const [sortDirection, setSortDirection] = useState<SortDirection>("desc")
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 5

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortField(field)
      setSortDirection("desc")
    }
    setCurrentPage(1)
  }

  // Filtered & Sorted Transactions
  const processedTransactions = useMemo(() => {
    return mockTransactions
      .filter((tx) => {
        const matchesQuery =
          tx.customer.name.toLowerCase().includes(filterQuery.toLowerCase()) ||
          tx.customer.email.toLowerCase().includes(filterQuery.toLowerCase()) ||
          tx.invoice.toLowerCase().includes(filterQuery.toLowerCase())
        const matchesStatus =
          statusFilter === "all" || tx.status === statusFilter
        return matchesQuery && matchesStatus
      })
      .sort((a, b) => {
        let comp = 0
        if (sortField === "customer") {
          comp = a.customer.name.localeCompare(b.customer.name)
        } else if (sortField === "amount") {
          comp = a.amount - b.amount
        } else if (sortField === "date") {
          comp = new Date(a.date).getTime() - new Date(b.date).getTime()
        }
        return sortDirection === "asc" ? comp : -comp
      })
  }, [filterQuery, statusFilter, sortField, sortDirection])

  const totalPages = Math.ceil(processedTransactions.length / pageSize) || 1
  const paginatedTransactions = processedTransactions.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  )

  const getStatusBadge = (status: Transaction["status"]) => {
    switch (status) {
      case "completed":
        return (
          <Badge
            variant="outline"
            className="border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 capitalize text-xs font-semibold gap-1"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Completed
          </Badge>
        )
      case "processing":
        return (
          <Badge
            variant="outline"
            className="border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400 capitalize text-xs font-semibold gap-1"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
            Processing
          </Badge>
        )
      case "pending":
        return (
          <Badge
            variant="outline"
            className="border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400 capitalize text-xs font-semibold gap-1"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            Pending
          </Badge>
        )
      case "refunded":
        return (
          <Badge
            variant="outline"
            className="border-rose-500/30 bg-rose-500/10 text-rose-600 dark:text-rose-400 capitalize text-xs font-semibold gap-1"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
            Refunded
          </Badge>
        )
    }
  }

  const renderSortIcon = (field: SortField) => {
    if (sortField !== field) {
      return <ArrowUpDown className="ml-1.5 h-3.5 w-3.5 text-muted-foreground" />
    }
    return sortDirection === "asc" ? (
      <ArrowUp className="ml-1.5 h-3.5 w-3.5 text-primary" />
    ) : (
      <ArrowDown className="ml-1.5 h-3.5 w-3.5 text-primary" />
    )
  }

  return (
    <Card className="border shadow-sm">
      <CardHeader className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Receipt className="h-4 w-4" />
            </div>
            <div>
              <CardTitle className="text-base sm:text-lg font-bold">Recent Transactions</CardTitle>
              <CardDescription className="text-xs">
                Review and monitor customer orders, payment status, and revenue settlements
              </CardDescription>
            </div>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="relative w-full sm:w-56">
            <Search className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search customer, invoice..."
              value={filterQuery}
              onChange={(e) => {
                setFilterQuery(e.target.value)
                setCurrentPage(1)
              }}
              className="h-8 pl-8 text-xs bg-muted/40 focus:bg-background"
            />
          </div>

          {/* Status Filter Pill */}
          <div className="flex items-center gap-1 bg-muted/50 p-0.5 rounded-lg border text-xs">
            {["all", "completed", "processing", "pending"].map((status) => (
              <button
                key={status}
                onClick={() => {
                  setStatusFilter(status)
                  setCurrentPage(1)
                }}
                className={`px-2 py-1 rounded capitalize transition-colors text-xs font-medium ${
                  statusFilter === status
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Responsive Table Container */}
        <div className="rounded-md border overflow-x-auto">
          <Table>
            <TableHeader className="bg-muted/40">
              <TableRow>
                <TableHead className="w-[120px]">Invoice</TableHead>
                <TableHead>
                  <button
                    onClick={() => handleSort("customer")}
                    className="flex items-center font-medium hover:text-foreground transition-colors"
                  >
                    Customer
                    {renderSortIcon("customer")}
                  </button>
                </TableHead>
                <TableHead className="hidden sm:table-cell">Status</TableHead>
                <TableHead className="hidden md:table-cell">Payment Method</TableHead>
                <TableHead>
                  <button
                    onClick={() => handleSort("date")}
                    className="flex items-center font-medium hover:text-foreground transition-colors"
                  >
                    Date
                    {renderSortIcon("date")}
                  </button>
                </TableHead>
                <TableHead className="text-right">
                  <button
                    onClick={() => handleSort("amount")}
                    className="ml-auto flex items-center font-medium hover:text-foreground transition-colors"
                  >
                    Amount
                    {renderSortIcon("amount")}
                  </button>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedTransactions.length > 0 ? (
                paginatedTransactions.map((tx) => (
                  <TableRow key={tx.id} className="hover:bg-muted/30">
                    <TableCell className="font-mono text-xs font-semibold text-muted-foreground">
                      {tx.invoice}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          {tx.customer.avatar ? (
                            <AvatarImage src={tx.customer.avatar} alt={tx.customer.name} />
                          ) : null}
                          <AvatarFallback className="text-[11px] font-bold">
                            {tx.customer.initials}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col truncate">
                          <span className="font-medium text-foreground text-xs leading-none truncate">
                            {tx.customer.name}
                          </span>
                          <span className="text-[11px] text-muted-foreground truncate mt-0.5">
                            {tx.customer.email}
                          </span>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      {getStatusBadge(tx.status)}
                    </TableCell>
                    <TableCell className="hidden md:table-cell text-xs text-muted-foreground">
                      {tx.method}
                    </TableCell>
                    <TableCell className="text-xs text-muted-foreground">
                      {new Date(tx.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </TableCell>
                    <TableCell className="text-right font-semibold text-xs sm:text-sm text-foreground">
                      +${tx.amount.toFixed(2)}
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={6} className="h-28 text-center text-muted-foreground">
                    No transactions match your current filters.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        {/* Pagination & Summary Footer */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-muted-foreground pt-1">
          <div>
            Showing{" "}
            <span className="font-semibold text-foreground">
              {processedTransactions.length > 0 ? (currentPage - 1) * pageSize + 1 : 0}
            </span>{" "}
            to{" "}
            <span className="font-semibold text-foreground">
              {Math.min(currentPage * pageSize, processedTransactions.length)}
            </span>{" "}
            of{" "}
            <span className="font-semibold text-foreground">
              {processedTransactions.length}
            </span>{" "}
            transactions
          </div>

          <div className="flex items-center gap-2 self-end sm:self-auto">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage <= 1}
              className="h-8 text-xs px-2.5 gap-1"
            >
              <ChevronLeft className="h-3.5 w-3.5" />
              <span>Previous</span>
            </Button>
            <div className="text-xs px-2 font-medium">
              Page {currentPage} of {totalPages}
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage >= totalPages}
              className="h-8 text-xs px-2.5 gap-1"
            >
              <span>Next</span>
              <ChevronRight className="h-3.5 w-3.5" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
