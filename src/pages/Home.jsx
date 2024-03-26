import React from 'react'

function Home() {
  return (
    <div className='text-white grid grid-cols-4'>
        <div className='h-full hidden md:block'>Genre</div>
        <div className='col-span-4 md:col-span-3'>Game List</div>
    </div>
  )
}

export default Home