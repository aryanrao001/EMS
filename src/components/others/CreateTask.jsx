import React, { useState } from 'react'
import NewTask from '../TaskList/NewTask';

const CreateTask = () => {

    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [assignTo, setAssignTo] = useState('')
    const [category, setCategory] = useState('')

    const [newTask, setNewTask] = useState('')

    const submitHandler = (e) =>{
        e.preventDefault();
        // console.log(taskTitle,taskDate,taskDescription,category,assignTo)

        setNewTask({taskTitle,taskDescription,taskDate,category,active:false,NewTask:true,failed:false,completed:false,});

        const data = JSON.parse(localStorage.getItem('employees'));
        data.forEach(function(elem){
            if(assignTo === elem.firstName){
                elem.tasks.push(newTask);
                elem.taskNumber.newTask = elem.taskNumber.newTask+1;
                console.log(elem)
            }
            
        });
        console.log(data)
        localStorage.setItem('employees',JSON.stringify(data))

        setTaskTitle('');
        setTaskDescription('');
        setTaskDate('');
        setAssignTo('');
        setCategory('');

    }

  return (
    <div>
        <form onSubmit={(e)=>{
            submitHandler(e)
        }} className=' h-2/4  flex justify-between mt-9 ' >
           <div className='w-1/2 '  >
                <h3 className='text-2xl font-semibold'  >Task Title </h3>
                <input 
                type='text'
                className='px-8 py-2 w-1/2 rounded-3xl my-2 bg-transparent border-emerald-400 border-x-4  '
                placeholder='Make a UI Design'
                value={taskTitle}
                onChange={(e)=>{
                    setTaskTitle(e.target.value)
                }}
                />
                <h3 className='text-2xl font-semibold'  >Date</h3>
                <input
                value={taskDate}
                onChange={(e)=>{
                    setTaskDate(e.target.value)
                }}
                type="date"
                className='px-8 py-2 w-1/2 rounded-3xl my-2 bg-transparent border-emerald-400  border-x-4   ' />
                <h3 className='text-2xl font-semibold'  >Assign to </h3>
                <input 
                type="text" 
                className='px-8 py-2 w-1/2 rounded-3xl my-2 bg-transparent border-emerald-400 border-x-4  ' 
                placeholder='Employee Name'
                value={assignTo}
                onChange={(e)=>{
                    setAssignTo(e.target.value)
                }}/>
                <h3 className='text-2xl font-semibold'  >Category</h3>
                <input type="text"
                className='px-8 py-2 w-1/2 rounded-3xl my-2 bg-transparent border-emerald-400 border-x-4  ' 
                placeholder='design,dev,etc'
                value={category}
                onChange={(e)=>{
                    setCategory(e.target.value)
                }}
                /><br/>
           </div>
            <div className='w-1/2' >
                <h3 className='text-2xl font-bold my-4' >Description </h3>
                <textarea
                 value={taskDescription}
                 onChange={(e)=>{
                    setTaskDescription(e.target.value)
                 }}
                 className='w-full border-gray-700 border bg-transparent '  name='' id='' cols="30" rows="10" ></textarea>
                <div className='flex items-center justify-center  ' ><button className='px-8 py-2  rounded-3xl my-2 bg-transparent border-emerald-400 bg-emerald-600 border-2 mt-9  '  > Create Task   </button> </div>
            </div>
        </form>
    </div>
    )
}

export default CreateTask