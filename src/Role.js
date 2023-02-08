import React from 'react'
import './Role.css';

const Role = () => {
  return (
    <>
      <div className='main-bg'>
        <div className='main-round'>
          <div className='rounded-circle'>
            <p className='Avatar'>Create an Avatar</p>
          </div>
        </div>
        <div className='role-circle'>
          <div className='rounded-circle'>2
            <p className='other-info'>Other Information</p>
          </div>

        </div>
        <h1 className='about-yourself'>Tell us a little bit about yourself</h1>
        <div className='role-inner-div'>
          <div className='role-question'>
            <p className='Question-head'>Question 1 <span className='span-ques'>of 4</span></p>
            <p className='Question-one'>What’s your role in the company?</p>
            <input type="text" class="form-control" id="label-role" name="username" placeholder="Enter Role" />
            <button className='Go-back-btn'>GoBack</button>
            <button className='Continue-btn'>Countinue</button>
          </div>
        </div>
        <div className='Avatar-role'></div>

      </div>
    </>
  )
}

export default Role

