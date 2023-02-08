import React from 'react'

const Targetprofileone = () => {
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
                <div className='target-inner-div'>
                    <div className='role-question-target'>
                        <p className='Question-head'>Question 4a <span className='span-ques'>of 4</span></p>
                        <p className='Question-two'>Define your target profile</p>

                        <p className='Industry'>Role of the person</p>
                        <p className='select-industry'><span className='select-span'>Select</span></p>

                        <p className='Revenue'>Designation</p>
                        <p className='select-revenue'><span className='select-span'>Select</span></p>

                        <p className='Employee'>Span of control</p>
                        <p className='select-employee'><span className='select-span'>Select</span></p>

                        <p className='Geography'>Influencer</p>
                        <p className='select-geography'><span className='select-span'>Select</span></p>


                        <button className='Go-back-target-btn'>GoBack</button>
                        <button className='Continue-target-btn'>Countinue</button>

                    </div>
                </div>
                <div className='Avatar-role'></div>

            </div>

        </>
    )
}

export default Targetprofileone
