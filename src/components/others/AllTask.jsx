import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

    const [userData,setUserData] =   useContext(AuthContext);

  return (
    <div className='bg-[#1c1c1c] py-5 px-3 rounded mt-8 ' >

            <div className=' bg-cyan-700 mb-2 p-3 flex rounded justify-between ' >
                <h2 className='w-1/5 text-center font-semibold text-xl '>Employee Name  </h2>
                <h3 className='w-1/5 text-center font-semibold text-xl '>New Task  </h3>
                <h3 className='w-1/5 text-center font-semibold text-xl '>Active  Task  </h3>
                <h3 className='w-1/5 text-center font-semibold text-xl '>Completed   </h3>
                <h3 className='w-1/5 text-center font-semibold text-xl '>Failed  </h3>
            </div>
        <div className='' >
        {userData.map(function(elem,idx){
            return<div key={idx} className=' bg-gray-900 mb-2 p-3 flex rounded justify-between ' >
            <h2  className='w-1/5 text-center text-white'>{elem.firstName} </h2>
            <h3  className='w-1/5 text-center text-blue-600' >{elem.taskNumber.newTask} </h3>
            <h5  className='w-1/5 text-center text-green-600'>{elem.taskNumber.active} </h5>
            <h5  className='w-1/5 text-center text-red-600'>{elem.taskNumber.completed} </h5>
            <h5  className='w-1/5 text-center text-emerald-500'>{elem.taskNumber.failed}  </h5>
            
        </div>

        })}
        </div>
        {/* <div className='bg-red-400 mb-2 p-3 flex rounded justify-between ' >
            <h2>Rajat Yadav </h2>
            <h3>Make a UI Design </h3>
            <h5>Status </h5>
        </div>
        <div className='bg-yellow-400 mb-2 p-3 flex rounded justify-between ' >
            <h2>Rajat Yadav </h2>
            <h3>Make a UI Design </h3>
            <h5>Status </h5>
        </div>
        <div className='bg-green-400 mb-2 p-3 flex rounded justify-between ' >
            <h2>Rajat Yadav </h2>
            <h3>Make a UI Design </h3>
            <h5>Status </h5>
        </div>
        <div className='bg-blue-400 mb-2 p-3 flex rounded justify-between ' >
            <h2>Rajat Yadav </h2>
            <h3>Make a UI Design </h3>
            <h5>Status </h5>
        </div>
        <div className='bg-zinc-400 mb-2 p-3 flex rounded justify-between ' >
            <h2>Rajat Yadav </h2>
            <h3>Make a UI Design </h3>
            <h5>Status </h5>
        </div> */}
    </div>
  )
}

export default AllTask