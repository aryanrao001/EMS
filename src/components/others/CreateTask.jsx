import React, { useContext, useState } from 'react'
import NewTask from '../TaskList/NewTask';
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {

    const [userData,setUserData] =   useContext(AuthContext);


    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('')
    const [date, setDate] = useState('')
    const [assignTo, setAssignTo] = useState('')
    const [category, setCategory] = useState('')

    const [newTask, setNewTask] = useState('')

    const submitHandler = (e) =>{
        e.preventDefault();
        // console.log(taskTitle,taskDate,taskDescription,category,assignTo)

        setNewTask({title,description,date,category,active:false,NewTask:true,failed:false,completed:false,});

        const data = userData;
        // console.log(data) 

          data.forEach(function(elem){
            if(assignTo === elem.firstName){
                elem.tasks.push(newTask);
                elem.taskNumber.newTask = elem.taskNumber.newTask+1;
            }
            
        });
        setUserData(data)
        console.log(data)
        // console.log(data)
        // localStorage.setItem('employees',JSON.stringify(data))

        setTitle('');
        setDescription('');
        setDate('');
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
                value={title}
                onChange={(e)=>{
                    setTitle(e.target.value)
                }}
                />
                <h3 className='text-2xl font-semibold'  >Date</h3>
                <input
                value={date}
                onChange={(e)=>{
                    setDate(e.target.value)
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
                 value={description}
                 onChange={(e)=>{
                    setDescription(e.target.value)
                 }}
                 className='w-full border-gray-700 border bg-transparent '  name='' id='' cols="30" rows="10" ></textarea>
                <div className='flex items-center justify-center  ' ><button className='px-8 py-2  rounded-3xl my-2 bg-transparent border-emerald-400 bg-emerald-600 border-2 mt-9  '  > Create Task   </button> </div>
            </div>
        </form>
    </div>
    )
}

export default CreateTask