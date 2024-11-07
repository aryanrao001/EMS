import React, { useState } from 'react'

const Login = () => {

    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    const submitHandller = (e) => {
        e.preventDefault()
        console.log("email is ", email)
        console.log("password is ", password )

        setemail("");
        setpassword("");
    }

    return(
       <>
            <div className='flex h-screen w-screen items-center justify-center'>
                <div className='border-2 border-red-100 rounded-2xl h-2/3 flex  justify-evenly flex-col p-4' >
                    <h1 className='text-2xl text-center  '>Login </h1>
                    <form
                    onSubmit={(e)=>{
                        submitHandller(e)
                    }}
                    className=' items-center h-[80%] flex flex-col justify-evenly' >
                        <input
                        value={email}
                        onChange={(e) =>{
                            setemail(e.target.value);
                        }}
                        required className='border-2 text-wh outlinne-none bg-transparent border-emerald-600 py-3 text-xl px-5 rounded-full  placeholder:text-white ' type="email" placeholder='Enter Your Email' ></input>
                        <input
                        value={password}
                        onChange={(e) =>{
                            setpassword(e.target.value);
                        }}
                        required className='border-2 text-wh outlinne-none bg-transparent border-emerald-600 py-3 text-xl px-5 rounded-full  placeholder:text-white ' type="password" placeholder='Enter Your password ' ></input>
                        <button className='border-2 text-wh outlinne-none bg-transparent border-none bg-emerald-700 py-2 text-xl px-7  rounded-full placeholder:text-white w-full '>Login</button>
                    </form>
                </div>
            </div>
       </>
    )
}

export default Login