import { BusinessMetrics } from "~~/components/investor-dashboard/business-metrics"
import { DashboardStats } from "~~/components/investor-dashboard/dashboard-stats"
import { MyProperties } from "~~/components/investor-dashboard/my-properties"
import { PortfolioChart } from "~~/components/investor-dashboard/portfolio-chart"
import { QuickActions } from "~~/components/investor-dashboard/quick-actions"
import { RecentTransactions } from "~~/components/investor-dashboard/recent-transactions"

export const metadata = {
  title: "Investor Dashboard | reAI",
  description: "Manage your tokenized property investments",
}

export default function InvestorDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Welcome Back, Alex Johnson!</h1>
          <p className="text-gray-600 text-lg">Track your tokenized property investments and portfolio performance</p>
        </div>

        {/* Stats Cards */}
        <DashboardStats />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          {/* Left Column - 2/3 width */}
          <div className="lg:col-span-2 space-y-6">
            <PortfolioChart />
            <MyProperties />
          </div>

          {/* Right Column - 1/3 width */}
          <div className="space-y-6">
            <QuickActions />
            <RecentTransactions />
            <BusinessMetrics />
          </div>
        </div>
      </div>
    </div>
  )
}
