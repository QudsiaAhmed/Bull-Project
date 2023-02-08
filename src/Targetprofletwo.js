import React from 'react'
const Targetprofletwo = () => {
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
                    <div className='role-question-targetb'>
                        <p className='Question-head'>Question 4b <span className='span-ques'>of 4</span></p>
                        <p className='Question-two'>Define your target profile</p>

                        <p className='Industry'>Geography</p>
                        <p className='select-industry'><span className='select-span'>Select</span></p>

                        <p className='Revenue'>Years in company</p>
                        <p className='select-revenue'><span className='select-span'>Select</span></p>

                        <p className='Span-control'>Span of control</p>
                        <input type="text" class="form-control" id="span-control-input" name="username" placeholder="Select" />

                        <button className='Go-back-targetb-btn'>GoBack</button>
                        <button className='Continue-targetb-btn'>Countinue</button>

                    </div>
                </div>
                <div className='Avatar-role'></div>

            </div>
        </>
    )
}

export default Targetprofletwo
