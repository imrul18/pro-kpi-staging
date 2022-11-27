// ** User List Component
import Table from './Table'

// ** Reactstrap Imports

// ** Custom Components

// ** Icons Imports

// ** Styles
import '@styles/react/apps/app-users.scss'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getAllData } from '../store'

const UsersList = () => {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getAllData)
  }, [])
  
  return (
    <div className='app-user-list'>
      {/* <Row>
        <Col lg='3' sm='6'>
          <StatsHorizontal
            color='primary'
            statTitle='Total Users'
            icon={<User size={20} />}
            renderStats={<h3 className='fw-bolder mb-75'>21,559</h3>}
          />
        </Col>
        <Col lg='3' sm='6'>
          <StatsHorizontal
            color='danger'
            statTitle='Paid Users'
            icon={<UserPlus size={20} />}
            renderStats={<h3 className='fw-bolder mb-75'>4,567</h3>}
          />
        </Col>
        <Col lg='3' sm='6'>
          <StatsHorizontal
            color='success'
            statTitle='Active Users'
            icon={<UserCheck size={20} />}
            renderStats={<h3 className='fw-bolder mb-75'>19,860</h3>}
          />
        </Col>
        <Col lg='3' sm='6'>
          <StatsHorizontal
            color='warning'
            statTitle='Pending Users'
            icon={<UserX size={20} />}
            renderStats={<h3 className='fw-bolder mb-75'>237</h3>}
          />
        </Col>
      </Row> */}
      <Table />
    </div>
  )
}

export default UsersList
