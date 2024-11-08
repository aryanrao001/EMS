import React from 'react'

const CreateTask = () => {
  return (
    <div>
        <form className=' h-2/4  flex justify-between mt-9 ' >
           <div className='w-1/2 '  >
                <h3 className='text-2xl font-semibold'  >Task Title </h3>
                <input type='text' className='px-8 py-2 w-1/2 rounded-3xl my-2 bg-transparent border-emerald-400 border-x-4  '  placeholder='Make a UI Design'/>
                <h3 className='text-2xl font-semibold'  >Date</h3>
                <input type="date" className='px-8 py-2 w-1/2 rounded-3xl my-2 bg-transparent border-emerald-400  border-x-4   ' />
                <h3 className='text-2xl font-semibold'  >Assign to </h3>
                <input type="text" className='px-8 py-2 w-1/2 rounded-3xl my-2 bg-transparent border-emerald-400 border-x-4  ' placeholder='Employee Name'/>
                <h3 className='text-2xl font-semibold'  >Category</h3>
                <input type="text" className='px-8 py-2 w-1/2 rounded-3xl my-2 bg-transparent border-emerald-400 border-x-4  ' placeholder='design,dev,etc'/><br/>
           </div>
            <div className='w-1/2' >
                <h3 className='text-2xl font-bold my-4' >Description </h3>
                <textarea className='w-full border-gray-700 border bg-transparent '  name='' id='' cols="30" rows="10" ></textarea>
                <div className='flex items-center justify-center  ' ><button className='px-8 py-2  rounded-3xl my-2 bg-transparent border-emerald-400 bg-emerald-600 border-2 mt-9  '  > Create Task   </button> </div>
            </div>
        </form>
    </div>
    )
}

export default CreateTask