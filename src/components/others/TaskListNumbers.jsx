import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className='flex justify-between gap-5 screen mt-10' >
        <div className=' rounded-xl w-[45%] px-8 py-6 bg-red-400 ' > 
            <h2 className='text-3xl font-semibold' >{data.taskNumber.newTask}</h2>
            <h3 className='text-2xl font-semibold' >New Task </h3>
        </div>
        <div className=' rounded-xl w-[45%] px-8 py-6 bg-green-400 ' > 
            <h2 className='text-3xl font-semibold' >{data.taskNumber.completed}</h2>
            <h3 className='text-2xl font-semibold' >Completed Task  </h3>
        </div>
        <div className=' rounded-xl w-[45%] px-8 py-6 bg-zinc-500 ' > 
            <h2 className='text-3xl font-semibold' >{data.taskNumber.active}</h2>
            <h3 className='text-2xl font-semibold' >Accept Task </h3> 
        </div>
        <div className=' rounded-xl w-[45%] px-8 py-6 bg-blue-400 ' > 
            <h2 className='text-3xl font-semibold' >{data.taskNumber.failed}</h2>
            <h3 className='text-2xl font-semibold' >Failed Task </h3>
        </div>
    </div>
  )
}

export default TaskListNumbers