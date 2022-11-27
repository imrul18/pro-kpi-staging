// ** React Imports
import { lazy } from 'react'
import { Navigate } from 'react-router-dom'

const UserList = lazy(() => import('./list'))
const UserView = lazy(() => import('./view'))


const UserRoute = [  
  {
    element: <UserList />,
    path: '/apps/user'
  },
  {
    path: '/apps/user/view',
    element: <Navigate to='/apps/user/view/1' />
  },
  {
    element: <UserView />,
    path: '/apps/user/view/:id'
  }
]

export default UserRoute
