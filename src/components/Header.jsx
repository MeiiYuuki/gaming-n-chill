import React from 'react'
import logo from '../assets/logo.png'
import { HiMagnifyingGlass } from "react-icons/hi2";

function Header() {
  return (
    <div className='flex justify-evenly items-center p-2'>
        <img src={logo} alt="" width={100} height={100}/>
        <div className='flex bg-slate-200 p-2 w-full items-center gap-2 mx-5 rounded-md'>
            <HiMagnifyingGlass />
            <input type="text" placeholder='Search Games' className='px-2 bg-transparent outline-none'/>
        </div>
    </div>
  )
}

export default Header