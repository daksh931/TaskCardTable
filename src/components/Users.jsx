import React from 'react'
import UserComponent from './UserComponent'
import Form from './Form'


const Users = () => {
  return (
    <div>
      <div className='md:flex justify-center mt-24'>
      
      <div className='m-2'>
        <UserComponent />
        </div>

      <div className='md:m-2'>
      <Form />
        </div>

      </div>
    </div>
  )
}

export default Users
