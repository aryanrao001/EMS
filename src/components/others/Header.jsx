import React from 'react'
import { setLocalStorage } from '../../utils/localStorage'
// const [userName, setUserName] = useState(second)
// if(!data){
//   setUserName('Admin');
// }else{
//   setUserName(data.firstName)
// }

const logOutUser = () =>{
  localStorage.setItem('loggedInUser','');
  window.location.reload();

}

const Header = ({data}) => {
  // console.log(data)
  return (
    <div className=' flex items-end  justify-between '>
        <h1 className='text-2xl font-medium' >Hello <br/><span className='text-3xl font-semibold ' >username  👋 </span>  </h1>
        <button onClick={logOutUser} className='py-1 px-3 bg-red-400 rounded-md text-lg font-medi'  >Log Out </button>
    </div>
  )
}

export default Header