import React from 'react'
import Header from '../others/Header'
import TaskListNumbers from '../others/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({data}) => {
  return (
    <>
    <div className='bg-[#1C1C1C] h-screen p-5   '   >
        <Header data={data} />
        <TaskListNumbers data={data} />
        <TaskList data={data} />
    </div>
    </>
  )
}

export default EmployeeDashboard;