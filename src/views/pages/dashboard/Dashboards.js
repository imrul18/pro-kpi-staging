import { lazy } from 'react'

const DashboardAnalytics = lazy(() => import('./analytics'))

const DashboardRoutes = [
  {
    path: '/dashboard',
    element: <DashboardAnalytics />
  }
]

export default DashboardRoutes
