import React, { useContext } from 'react'
import {useNavigate} from 'react-router-dom'
import App from '../App'
import { AppContext } from '../context/Appcontext'

const Topdoctors = () => {

const navigate=useNavigate()
const{doctors}=useContext(AppContext)

  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
      <h1 className='text-3xl font-medium'>Top Doctors To Book</h1>
      <p className='w-1/3 text-center text-sm'>Simply browse through the extensive list of trusted doctors.</p>
      <div className=' grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
          doctors.slice(0,10).map((item,index)=>(
            <div onClick={()=>{navigate(`/appointment/${item._id}`);scrollTo(0,0)}} key={index} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'>
               <img className='bg-blue-50' src={item.image} alt="" />
               <div className='p-4'>
                <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                  <p className='w-2 h-2 bg-green-500 rounded-full'></p>
                  <p>Available</p>
                </div>
                <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                <p className='text-gray-600 text-sm'>{item.speciality}</p>
               </div>
            </div>
          ))
        }
      </div>
      <button onClick={()=>{navigate('/doctors');scrollTo(0,0)}} className='bg-blue-100 text-gray-600 px-12 py-3 rounded-full mt-10' >more</button>
    </div>
  )
}

export default Topdoctors
